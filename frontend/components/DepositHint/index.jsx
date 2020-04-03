import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { Ellipsis } from '@shopgate/engage/components';
import { i18n } from '@shopgate/engage/core';
import { depositLabel } from '../../config';

const style = css({
  fontWeight: 500,
}).toString();

/**
 * DepositHint component
 * @param {number} amount Deposit amount
 * @param {string} currency Currency string like USD or EUR
 * @param {string} [className] Class name for style
 * @return {JSX}
 */
const DepositHint = ({ amount, currency, className = '' }) => {
  if (!(amount && currency)) {
    return null;
  }

  return (
    <Ellipsis
      rows={1}
      className={`${style} ${className}`}
    >
      {`${i18n.text('separate_deposit.plus')} ${i18n.price(amount, currency, true)} ${depositLabel}`}
    </Ellipsis>
  );
};

DepositHint.propTypes = {
  amount: PropTypes.number,
  className: PropTypes.string,
  currency: PropTypes.string,
};

DepositHint.defaultProps = {
  amount: 0,
  className: null,
  currency: null,
};

export default DepositHint;
