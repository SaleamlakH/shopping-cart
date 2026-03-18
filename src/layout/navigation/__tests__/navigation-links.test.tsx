import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { userEvent } from '@testing-library/user-event';
import NavigationLinks from '../components/navigation-links/NavigationLinks';

describe('NavigationLinks component', () => {
  test('render product page link', () => {
    render(
      <MemoryRouter>
        <NavigationLinks>
          <a></a>
        </NavigationLinks>
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: /products/i })).toBeInTheDocument();
  });

  test('render passed children', () => {
    render(
      <MemoryRouter>
        <NavigationLinks>
          <a>Inserted child</a>
        </NavigationLinks>
      </MemoryRouter>
    );

    expect(screen.getByText(/inserted child/i)).toBeInTheDocument();
  });

  // functional test
  test('navigate to product page', async () => {
    render(
      <MemoryRouter>
        <NavigationLinks>
          <a></a>
        </NavigationLinks>

        <Routes>
          <Route path="/products" element={<div>Products page</div>} />
        </Routes>
      </MemoryRouter>
    );

    await userEvent.click(screen.getByRole('link', { name: 'Products' }));

    expect(screen.getByText(/products page/i)).toBeInTheDocument();
  });
});
