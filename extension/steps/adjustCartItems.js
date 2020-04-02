const getDepositAmount = require('../helpers/getDepositAmount')
const adjustProductPrice = require('../helpers/adjustProductPrice')
const PRICE_KEYS = ['unit', 'default', 'special']

module.exports = async (context, { cartItems = [] }) => {
  const updatedCartItems = cartItems.map((cartItem) => {
    const { triggerProductProperties = [] } = context.config
    const { product = {}, quantity = 0 } = cartItem
    const { shopItem = {}, price = {} } = product
    const { properties = [] } = shopItem
    const separatedDepositAmount = getDepositAmount(triggerProductProperties, properties) * quantity
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
