const getDepositAmount = require('../helpers/getDepositAmount')
const adjustProductPrice = require('../helpers/adjustProductPrice')
const PRICE_KEYS = ['unit', 'default', 'special']

module.exports = async (context, { cartItems = [] }) => {
  const { triggerProductProperties = [] } = context.config

  const updatedCartItems = cartItems
    .filter(cartItem => cartItem.type === 'product')
    .map((cartItem) => {
    const { product, quantity } = cartItem
    const { additionalProperties = [], price } = product

    const separatedDepositAmount = getDepositAmount(triggerProductProperties, additionalProperties) * quantity

    return {
      ...cartItem,
      product: {
        ...product,
        price: adjustProductPrice(price, separatedDepositAmount, PRICE_KEYS),
        separatedDepositAmount
      }
    }
  })

  return { cartItems: updatedCartItems }
}
