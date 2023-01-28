import { buttonsObject } from '@/constants'

export const checkPriority = (operator, previousOperator) => {
  let operatorPriority = 0
  let previousOperatorPriority = 0

  buttonsObject.forEach(obj => {
    if (obj.value.trim() === operator.trim()) {
      operatorPriority = obj.priority
    }
    if (obj.value.trim() === previousOperator.trim()) {
      previousOperatorPriority = obj.priority
    }
  })
  return operatorPriority <= previousOperatorPriority
}
