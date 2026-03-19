import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import routes from '../routes';

const router = createMemoryRouter(routes);

describe('Setup test', () => {
  test('render App and its children', () => {
    render(<RouterProvider router={router} />);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
