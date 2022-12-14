import {
  store,
} from "@/store"

import {
  bindActionCreators,
} from "redux"

import {
  setOwnValue,
} from "@/actions/actions"

const {
  dispatch,
} = store

const {
  ownValue,
} = bindActionCreators({
  ownValue: setOwnValue,
}, dispatch)


export const replacePreviousOperator = (display, value) => {
  let copyDisplay = display
  copyDisplay = copyDisplay.trim()
  copyDisplay = copyDisplay.slice(0, copyDisplay.length - 1)
  ownValue(`${copyDisplay} ${value}`)
}
