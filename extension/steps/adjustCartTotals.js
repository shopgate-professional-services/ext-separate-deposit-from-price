module.exports = async (context, { cartItems = [], totals = [] }) => {
  const depositTotal = cartItems.reduce((total, cartItem) => {
    const { product = {} } = cartItem
    const { separatedDepositAmount = 0 } = product

    return total + separatedDepositAmount
  }, 0)

  if (!depositTotal) {
    return { totals }
  }

  // deduct deposit from subtotal
  const newTotals = totals.map((total) => {
    const newTotal = { ...total }
    if (newTotal.type !== 'subTotal') {
      return newTotal
    }

    let { amount: newAmount } = newTotal

    if (newAmount && !isNaN(newAmount) && newAmount > depositTotal) {
      newAmount = newAmount - depositTotal
    }

    return {
      ...newTotal,
      amount: newAmount
    }
  })

  return {
    totals: [
      ...newTotals,
      {
        label: null,
        amount: depositTotal,
        type: 'deposit'
      }
    ]
  }
}
