import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Navigation from '../Navigation';
import { MemoryRouter } from 'react-router';

describe('Navigation component', () => {
  function renderNavigation() {
    render(
      <MemoryRouter>
        <Navigation>
          <div>Test Child</div>
        </Navigation>
      </MemoryRouter>
    );
  }

  test('render navigation container', () => {
    renderNavigation();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('render logo', () => {
    renderNavigation();
    expect(screen.getByRole('link', { name: /shopping cart home/i }));
    expect(screen.getByTestId('logo-img')).toBeInTheDocument();
  });

  test('render passed child', () => {
    renderNavigation();
    expect(screen.getByText(/test child/i)).toBeInTheDocument();
  });
});
