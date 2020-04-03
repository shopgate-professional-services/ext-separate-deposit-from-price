const getDepositAmount = require('../helpers/getDepositAmount')

module.exports = async (context, { products = [] }) => {
  const { triggerProductProperties = [] } = context.config
  const updatedProducts = products.map((product) => {
    const { properties = [] } = product

    return {
      ...product,
      separatedDepositAmount: getDepositAmount(triggerProductProperties, properties)
    }
  })

  return { products: updatedProducts }
}
