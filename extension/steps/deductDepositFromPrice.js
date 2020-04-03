const adjustProductPrice = require('../helpers/adjustProductPrice')
const PRICE_PROPS_TO_ADJUST = ['unitPrice', 'unitPriceStriked', 'unitPriceNet', 'unitPriceWithTax']

module.exports = async (context, { products = [] }) => {
  const updatedProducts = products.map((product) => {
    const { price, separatedDepositAmount = 0 } = product
    return {
      ...product,
      price: adjustProductPrice(price, separatedDepositAmount, PRICE_PROPS_TO_ADJUST)
    }
  })

  return { products: updatedProducts }
}
