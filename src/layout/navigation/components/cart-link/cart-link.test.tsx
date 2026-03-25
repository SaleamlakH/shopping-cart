import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CartLink from './CartLink';
import { MemoryRouter } from 'react-router';

describe('cart Navigation link', () => {
  test('render passed cart item quantity', () => {
    render(
      <MemoryRouter>
        <CartLink quantity={2}></CartLink>
      </MemoryRouter>
    );

    expect(screen.getByText('2')).toBeInTheDocument();
  });

  test('link has correct reference', () => {
    render(
      <MemoryRouter>
        <CartLink quantity={2} />
      </MemoryRouter>
    );

    expect(screen.getByRole('link')).toHaveAttribute('href', '/cart');
  });

  test('link has accessibility name', () => {
    render(
      <MemoryRouter>
        <CartLink quantity={2} />
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: /cart 2 items/i }));
  });
});
