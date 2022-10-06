import {
  store,
} from "@/store"

import {
  bindActionCreators,
} from "redux"

import {
  changeDisplayValue,
  setOwnValue,
} from "@/actions/actions"

const {
  dispatch,
} = store

const {
  changeDisplay,
  ownValue,
} = bindActionCreators({
  changeDisplay: changeDisplayValue,
  ownValue: setOwnValue,
}, dispatch)


export const replacePreviousOpertor = (display, value) => {
  let copyDisplay = display
  copyDisplay = copyDisplay.trim()
  copyDisplay = copyDisplay.slice(0, copyDisplay.length - 1)
  ownValue(`${copyDisplay} ${value}`)
}
