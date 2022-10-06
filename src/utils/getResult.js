import {
  doCorrectValue,
} from "./doCorrectValue"

export const getResult = display => {
  const copy = display
  const array = doCorrectValue(copy.split(' '))
  console.log(array, 'RESULT')
}
