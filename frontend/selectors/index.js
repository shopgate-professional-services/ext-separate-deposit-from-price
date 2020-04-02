import { createSelector } from 'reselect';

/**
 * Selects the cart data from the store.
 * @param {Object} state The current state.
 * @return {Object}
 */
export const getCart = state => state.cart;

/**
 * Selects the total amounts stack from the cart data.
 * @param {Object} state The current application state.
 * @return {Object} The total amount stack.
 */
export const getTotals = createSelector(
  getCart,
  cart => cart.totals
);

export const getDepositTotal = createSelector(
  getTotals,
  (totals = []) => (
    totals.find(({ type }) => type === 'deposit') || null
  )
);
