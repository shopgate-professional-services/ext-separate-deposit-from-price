import { connect } from 'react-redux';
import { getProductCurrency } from '@shopgate/engage/product';
import { getProductDepositAmountById } from '../../selectors';

/**
 * @param {Object} state state
 * @param {Object} props Component props
 * @returns {Object}
 */
const mapStateToProps = (state, props) => {
  let propsToUse = { ...props };

  if (!props.productId && props.product && typeof props.product === 'object') {
    propsToUse = { productId: props.product.id };
  }

  return {
    depositAmount: getProductDepositAmountById(state, propsToUse),
    currency: getProductCurrency(state, propsToUse),
  };
};

export default connect(mapStateToProps);
