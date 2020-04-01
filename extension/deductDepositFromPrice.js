const PRICE_PROPS_TO_ADJUST = ['unitPrice', 'unitPriceStriked', 'unitPriceNet', 'unitPriceWithTax']

module.exports = async (context, { products = [] }) => {
  const updatedProducts = products.map((product) => {
    const { price, separatedDepositAmount = 0 } = product
    return {
      ...product,
      price: adjustProductPrice(price, separatedDepositAmount)
    }
  })

  return { products: updatedProducts }
}

/**
 * Adjust product price by deducting deposit amount
 * @param {Object} price Price object
 * @param {number} separatedDepositAmount Deposit amount to deduct
 *
 * @return {Object}
 */
const adjustProductPrice = (price, separatedDepositAmount) => {
  const newPrice = { ...price }
  if (!separatedDepositAmount) {
    return newPrice
  }

  PRICE_PROPS_TO_ADJUST.forEach((key) => {
    console.log(`price adjustment key ${key} value ${newPrice[key]}`)
    newPrice[key] = deductAmount(newPrice[key], separatedDepositAmount)
  })

  if (Array.isArray(newPrice.tiers) && newPrice.tiers.length) {
    newPrice.tiers = newPrice.tiers.map((tier) => {
      if (!tier.unitPrice) {
        return tier
      }

      return {
        ...tier,
        unitPrice: deductAmount(tier.unitPrice, separatedDepositAmount)
      }
    })
  }

  return newPrice
}

/**
 *
 * @param {number} originalAmount Original price
 * @param {number} separatedDepositAmount Deposit amount to deduct
 * @return {number}
 */
const deductAmount = (originalAmount, separatedDepositAmount) => {
  if (originalAmount < separatedDepositAmount) {
    return originalAmount
  }

  return originalAmount - separatedDepositAmount
}
