import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import DepositHint from '../../../components/DepositHint';
import connect from '../connector';

const style = css({
  position: 'absolute',
  right: '17px',
  maxWidth: '60%',
}).toString();

/**
 * FavoritesProductPriceAfter component
 * @param {number} depositAmount Deposit amount
 * @param {string} currency Currency string like USD and EUR
 * @return {JSX}
 */
const FavoritesProductPriceAfter = ({ depositAmount, currency }) => (
  <div>
    <DepositHint amount={depositAmount} currency={currency} className={style} />
  </div>
);

FavoritesProductPriceAfter.propTypes = {
  currency: PropTypes.string,
  depositAmount: PropTypes.number,
};

FavoritesProductPriceAfter.defaultProps = {
  currency: null,
  depositAmount: 0,
};

export default connect(FavoritesProductPriceAfter);
