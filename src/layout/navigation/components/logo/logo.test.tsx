import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Logo from './Logo';

describe('logo component', () => {
  test('render Logo', () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );

    expect(screen.getByTestId('logo-img')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText(/shopping cart/i)).toBeInTheDocument();
  });

  test('the link has correct reference', () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
  });

  test('the link has accessibility name', () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('link', { name: /shopping cart home/i })
    ).toBeInTheDocument();
  });
});
