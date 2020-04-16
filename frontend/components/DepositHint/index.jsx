import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { css } from 'glamor';
import { i18n } from '@shopgate/engage/core';
import { depositLabels } from '../../config';

const style = css({
  fontWeight: 500,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}).toString();

/**
 * DepositHint component
 * @param {number} amount Deposit amount
 * @param {string} currency Currency string like USD or EUR
 * @param {string} [className=null] Class name for style
 * @return {JSX}
 */
const DepositHint = ({ amount, currency, className }) => {
  if (!(amount && currency)) {
    return null;
  }

  let label;
  if (depositLabels.label) {
    label = depositLabels.label.replace('{deposit}', i18n.price(amount, currency, true));
  } else {
    label = i18n.text('separate_deposit.label', { deposit: i18n.price(amount, currency, true) });
  }

  return (
    <div className={classnames(style, className)}>
      {label}
    </div>
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
