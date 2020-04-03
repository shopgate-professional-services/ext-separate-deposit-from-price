/**
 * Calculate total deposit amount
 * @param {Object[]} triggerProductProperties Trigger Product Properties from config
 * @param {Object[]} productProperties
 * @return {number}
 */
module.exports = (triggerProductProperties = [], productProperties = []) => (
  productProperties.reduce((total, property) => {
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
)
