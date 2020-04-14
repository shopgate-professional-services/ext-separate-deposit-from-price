import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import DepositHint from '../../../components/DepositHint';
import connect from '../connector';

const style = css({
  fontSize: '0.75rem',
}).toString();

/**
 * ProductListPriceAfter component
 * @param {number} depositAmount Deposit amount
 * @param {string} currency Currency sting like USD and EUR
 * @return {JSX}
 */
const ProductListPriceAfter = ({ depositAmount, currency }) => (
  <DepositHint amount={depositAmount} currency={currency} className={style} />
);

ProductListPriceAfter.propTypes = {
  currency: PropTypes.string,
  depositAmount: PropTypes.number,
};

ProductListPriceAfter.defaultProps = {
  currency: null,
  depositAmount: 0,
};

export default connect(ProductListPriceAfter);
