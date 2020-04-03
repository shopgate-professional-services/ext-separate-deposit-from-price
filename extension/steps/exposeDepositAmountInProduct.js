module.exports = async (context, { products = [] }) => {
  if (!(products.length)) {
    return
  }

  const { separatedDepositAmount = 0 } = products[0]

  return { separatedDepositAmount }
}
