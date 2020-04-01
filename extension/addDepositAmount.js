module.exports = async (context, { products = [] }) => {
  const { triggerProductProperties = [] } = context.config
  const updatedProducts = products.map((product) => {
    const { properties = [] } = product
    const depositAmount = properties.reduce((total, property) => {
      const matchingTriggerProperty = triggerProductProperties.find(triggerProperty => (
        triggerProperty.label === property.label && triggerProperty.value === property.value
      ))

      if (!matchingTriggerProperty) {
        return total
      }

      let { depositAmount: propertyDepositAmount } = matchingTriggerProperty
      propertyDepositAmount = propertyDepositAmount && !isNaN(propertyDepositAmount) ? parseFloat(propertyDepositAmount) : 0

      return total + propertyDepositAmount
    }, 0)
    return {
      ...product,
      separatedDepositAmount: depositAmount
    }
  })

  return { products: updatedProducts }
}
