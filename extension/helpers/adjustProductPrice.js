/**
 * Adjust price object by deposit amount
 * @param {Object} price Price object
 * @param {number} separatedDepositAmount Deposit amount to reduce price by
 * @param {string[]} priceKeys
 */
module.exports = (price, separatedDepositAmount, priceKeys = []) => {
  const newPrice = { ...price }
  if (!separatedDepositAmount) {
    return newPrice
  }

  priceKeys.forEach((key) => {
    if (!newPrice[key]) {
      return
    }

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

  if (newPrice.info) {
    newPrice.info = ''
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
  if (!originalAmount ||
    isNaN(originalAmount) ||
    !separatedDepositAmount ||
    isNaN(separatedDepositAmount)) {
    return originalAmount
  }

  if (originalAmount < separatedDepositAmount) {
    return originalAmount
  }

  return originalAmount - separatedDepositAmount
}
