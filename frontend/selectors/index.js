import { createSelector } from 'reselect';
import { getProductDataById } from '@shopgate/engage/product';

/**
 * Selects the total amounts stack from the cart data.
 * @param {Object} state The current application state.
 * @return {Object} The total amount stack.
 */
const getTotals = createSelector(
  state => state.cart,
  cart => cart.totals
);

export const getDepositTotal = createSelector(
  getTotals,
  (totals = []) => (
    totals.find(({ type }) => type === 'deposit') || null
  )
);

/**
 * Selects the total amounts stack from the cart data.
 * @param {Object} state The current application state.
 * @param {Object} props Props from component
 * @return {number}
 */
export const getProductDepositAmountById = createSelector(
  getProductDataById,
  (productData) => {
    const { separatedDepositAmount = 0 } = productData || {};
    return separatedDepositAmount;
  }
);
