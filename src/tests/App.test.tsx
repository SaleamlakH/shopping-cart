import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Setup test', () => {
  test('render Setup Heading', () => {
    render(<App />);
    expect(screen.getByText('Setup')).toBeInTheDocument();
  });
});
