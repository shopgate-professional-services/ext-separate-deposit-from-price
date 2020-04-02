import React from 'react';
import PropTypes from 'prop-types';
import { CartTotalLine } from '@shopgate/engage/components';
import connect from './connector';

/**
 * DepositCartSubtotal portal
 * @param {Object} depositTotal Total object
 * @param {string} currency Currency
 * @return {JSX}
 * @constructor
 */
const DepositCartSubtotal = ({ depositTotal, currency }) => {
  if (!(depositTotal && currency)) {
    return null;
  }

  return (
    <CartTotalLine>
      <CartTotalLine.Label label={depositTotal.label} />
      <CartTotalLine.Amount amount={depositTotal.amount} currency={currency} />
    </CartTotalLine>
  );
};

DepositCartSubtotal.propTypes = {
  currency: PropTypes.string,
  depositTotal: PropTypes.shape(),
};

DepositCartSubtotal.defaultProps = {
  currency: null,
  depositTotal: null,
};

export default connect(DepositCartSubtotal);
