import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { PaymentSummary } from './PaymentSummary';
import axios from 'axios';

vi.mock('axios');

describe('Payment Summary Component', () => {
  let loadCart;
  let paymentSummary;

  beforeEach(() => {
    loadCart = vi.fn();

    paymentSummary = {
      "totalItems": 3,
      "productCostCents": 4275,
      "shippingCostCents": 499,
      "totalCostBeforeTaxCents": 4774,
      "taxCents": 477,
      "totalCostCents": 5251
    };
  });


  it('tests if component values are correct and it is rendered', () => {
    render(
      <MemoryRouter>
        <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
      </MemoryRouter>
    );

    expect(screen.getByTestId('productCostCents')).toHaveTextContent('$42.75');

    expect(screen.getByTestId('shippingCostCents')).toHaveTextContent('$4.99');

    expect(screen.getByTestId('totalCostBeforeTaxCents')).toHaveTextContent('$47.74');

    expect(screen.getByTestId('taxCents')).toHaveTextContent('$4.77');

    expect(screen.getByTestId('totalCostCents')).toHaveTextContent('$52.51');
  });
});