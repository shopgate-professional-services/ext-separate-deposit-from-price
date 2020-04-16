import { connect } from 'react-redux';
import { getCurrency } from '@shopgate/engage/cart';
import { getDepositTotal } from '../../selectors';

/**
 * @param {Object} state state
 * @returns {Object}
 */
const mapStateToProps = state => ({
  depositTotal: getDepositTotal(state),
  currency: getCurrency(state),
});

export default connect(mapStateToProps);
