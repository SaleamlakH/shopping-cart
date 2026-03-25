import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import ProductCard from './ProductCard';
import type { Product } from './ProductCard';
import shoppingCartImg from '../../assets/shopping-cart.svg';
import userEvent from '@testing-library/user-event';

const product: Product = {
  id: 0,
  title: 'title',
  price: 12.0,
  description: 'describe describe',
  category: 'category',
  image: shoppingCartImg,
  rating: {
    rate: 4.5,
    count: 124,
  },
};

describe('Product Card', () => {
  describe('rendering test', () => {
    test('render product card as an accessible article', () => {
      render(<ProductCard product={product} />);

      expect(
        screen.getByRole('article', { name: `${product.title}` })
      ).toBeInTheDocument();
    });

    test('render product title', () => {
      render(<ProductCard product={product} />);

      expect(
        screen.getByRole('heading', { name: `${product.title}` })
      ).toBeInTheDocument();
    });

    test('render description', () => {
      render(<ProductCard product={product} />);

      expect(screen.getByText(product.description)).toBeInTheDocument();
    });

    test('render price', () => {
      render(<ProductCard product={product} />);

      expect(screen.getByText(product.price)).toBeInTheDocument();
    });

    test('render product image', () => {
      render(<ProductCard product={product} />);

      expect(screen.getByRole('presentation')).toBeInTheDocument();
    });

    // components related to quantity
    test('render quantity input element', () => {
      render(<ProductCard product={product} />);

      expect(screen.getByRole('spinbutton')).toBeInTheDocument();
    });

    test('render increment button', () => {
      render(<ProductCard product={product} />);

      expect(
        screen.getByRole('button', { name: /increase quantity/i })
      ).toBeInTheDocument();
    });

    test('render decrement button', () => {
      render(<ProductCard product={product} />);

      expect(
        screen.getByRole('button', { name: /decrease quantity/i })
      ).toBeInTheDocument();
    });

    test('render add to cart button', () => {
      render(<ProductCard product={product} />);

      expect(
        screen.getByRole('button', { name: /add to cart/i })
      ).toBeInTheDocument();
    });
  });

  describe('functionality test', () => {
    test('quantity update when input change', async () => {
      render(<ProductCard product={product} />);

      const input: HTMLInputElement = screen.getByRole('spinbutton');
      input.value = '';

      await userEvent.type(input, '2');
      expect(input).toHaveValue(2);
    });

    test('prevent entering quantity less than 1', async () => {
      render(<ProductCard product={product} />);

      const input: HTMLInputElement = screen.getByRole('spinbutton');
      input.value = '';

      await userEvent.type(input, '0');
      expect(input).toHaveValue(1);
    });

    test('increment button increases quantity', async () => {
      render(<ProductCard product={product} />);

      const button = screen.getByRole('button', { name: /increase/i });
      const input: HTMLInputElement = screen.getByRole('spinbutton');

      await userEvent.click(button);
      expect(input).toHaveValue(2);
    });

    test('decrement button decreases quantity', async () => {
      render(<ProductCard product={product} />);

      const incrementBtn = screen.getByRole('button', { name: /increase/i });
      const decrementBtn = screen.getByRole('button', { name: /decrease/i });
      const input: HTMLInputElement = screen.getByRole('spinbutton');

      await userEvent.click(incrementBtn);
      await userEvent.click(decrementBtn);

      expect(input).toHaveValue(1);
    });

    test('prevent decrement below 1', async () => {
      render(<ProductCard product={product} />);

      const button = screen.getByRole('button', { name: /decrease/i });
      const input: HTMLInputElement = screen.getByRole('spinbutton');

      await userEvent.click(button);
      await userEvent.click(button);

      expect(input).toHaveValue(1);
    });
  });
});
