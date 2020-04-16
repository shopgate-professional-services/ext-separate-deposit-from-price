import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { withCurrentProduct } from '@shopgate/engage/core';
import DepositHint from '../../../components/DepositHint';
import connect from '../connector';

const style = css({
  fontSize: '0.825rem',
}).toString();

/**
 * PDPProductPriceAfter component
 * @param {number} depositAmount Deposit amount
 * @param {string} currency Currency string like USD EUR
 * @return {JSX}
 */
const PDPProductPriceAfter = ({ depositAmount, currency }) => (
  <DepositHint amount={depositAmount} currency={currency} className={style} />
);

PDPProductPriceAfter.propTypes = {
  currency: PropTypes.string,
  depositAmount: PropTypes.number,
};

PDPProductPriceAfter.defaultProps = {
  currency: null,
  depositAmount: 0,
};

export default withCurrentProduct(connect(PDPProductPriceAfter));
