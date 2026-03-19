import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Search from '../components/search/Search';
import userEvent from '@testing-library/user-event';
import {
  createMemoryRouter,
  RouterProvider,
  type RouteObject,
} from 'react-router';

const categories = ['Electronics', 'Furniture', 'Fashion'];

const mockLoader = vi.fn(async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  return url.searchParams;
});

const routes: RouteObject[] = [
  {
    path: '/products',
    element: <Search categories={categories} />,
    loader: mockLoader,
  },
];

const router = createMemoryRouter(routes, { initialEntries: ['/products'] });

describe('Search Component', () => {
  describe('category', () => {
    test('render category select element', () => {
      render(<RouterProvider router={router} />);

      expect(
        screen.getByRole('combobox', { name: /category/i })
      ).toBeInTheDocument();
    });

    test('render all category options', () => {
      render(<RouterProvider router={router} />);

      for (const category of categories) {
        expect(
          screen.getByRole('option', { name: category })
        ).toBeInTheDocument();
      }
    });

    test('category value is empty string by default', () => {
      render(<RouterProvider router={router} />);

      const selectElm = screen.getByRole('combobox', {
        name: /category/i,
      }) as HTMLSelectElement;

      expect(selectElm.value).toBe('');
    });

    // function test
    test('category value is the selected option', async () => {
      render(<RouterProvider router={router} />);

      const selectElm = screen.getByRole('combobox', {
        name: /category/i,
      }) as HTMLSelectElement;

      await userEvent.selectOptions(selectElm, 'Fashion');
      expect(selectElm.value).toBe('Fashion');
    });
  });

  describe('input element', () => {
    test('render input element', () => {
      render(<RouterProvider router={router} />);

      expect(
        screen.getByRole('textbox', { name: /search/i })
      ).toBeInTheDocument();
    });

    test('has placeholder', () => {
      render(<RouterProvider router={router} />);

      expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
    });

    // function test
    test('input value updated correctly', async () => {
      render(<RouterProvider router={router} />);

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await userEvent.type(input, 'test input');

      expect(input.value).toBe('test input');
    });
  });

  describe('search button', () => {
    test('render search button and is accessible', () => {
      render(<RouterProvider router={router} />);

      expect(
        screen.getByRole('button', { name: /submit search/i })
      ).toBeInTheDocument();
    });

    test('render search icon', () => {
      render(<RouterProvider router={router} />);

      expect(screen.getByTestId(/search-icon/i)).toBeInTheDocument();
    });

    // function test
    test('submit triggers loader', async () => {
      render(<RouterProvider router={router} />);
      mockLoader.mockClear();

      const select = screen.getByRole('combobox');
      const input = screen.getByRole('textbox');
      const button = screen.getByRole('button');

      await userEvent.type(input, 'laptop');
      await userEvent.selectOptions(select, 'Electronics');
      await userEvent.click(button);

      expect(mockLoader).toHaveBeenCalledTimes(1);

      const request = mockLoader.mock.calls[0][0].request;
      const searchParams = new URL(request.url).searchParams;
      expect(searchParams.get('category')).toBe('Electronics');
      expect(searchParams.get('q')).toBe('laptop');
    });
  });
});
