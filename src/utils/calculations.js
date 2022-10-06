import {
  store,
} from "@/store"
import {
  bindActionCreators,
} from "redux"

/* ACTIONS */
import {
  addItemToHistory,
} from "@/actions/actions"
const {
  dispatch,
} = store
const {
  addHistoryItem,
} = bindActionCreators({
  addHistoryItem: addItemToHistory,
}, dispatch)

export const division = (previousOperand, lastOperand) => {
  addHistoryItem(`${previousOperand} / ${lastOperand}`)
  return previousOperand / lastOperand
}
export const multiplication = (previousOperand, lastOperand) => {
  addHistoryItem(`${previousOperand} * ${lastOperand}`)
  return previousOperand * lastOperand
}
export const addition = (previousOperand, lastOperand) => {
  addHistoryItem(`${previousOperand} + ${lastOperand}`)
  return previousOperand + lastOperand
}
export const subtraction = (previousOperand, lastOperand) => {
  addHistoryItem(`${previousOperand} - ${lastOperand}`)
  return previousOperand - lastOperand
}
