import {
  store,
} from "@/store"

import {
  bindActionCreators,
} from "redux"

/* ACTIONS */
import {
  changeDisplayValue,
  setOwnValue,
  setDefaultValue,
} from "@/actions/actions"
/* CONSTANTS */
import {
  DEFAULT_DISPLAY_VALUE,
} from "@/constants"
/* UTILS */
import {
  firstCorrectInput,
} from "./firstCorrectInput"
import {
  replacePreviousOperand,
} from "./replacePreviousOperand"
import {
  deleteLastItem,
} from './deleteLastItem'
const {
  dispatch,
} = store

const {
  changeDisplay,
  ownValue,
  setDefault,
} = bindActionCreators({
  changeDisplay: changeDisplayValue,
  ownValue: setOwnValue,
  setDefault: setDefaultValue,
}, dispatch)



export const controller = ({
  value,
}, display) => {

  if (value.match(/[0123456789]/i)) {

    if (display === DEFAULT_DISPLAY_VALUE) {
      return firstCorrectInput(value)
    } else {
      let copy = display
      copy = copy.trim()
      return copy[copy.length - 1].match(/\)/) ? ownValue(`${display} * ${value}`) : changeDisplay(value)
    }

  }

  if (value.match(/[*\-/+]/)) {
    let copy = display
    copy = copy.trim()
    const array = copy.split(' ')
    if (array[array.length - 1].match(/\(/)) {
      return
    }
    return copy[copy.length - 1].match(/[*-/+/.]/) ? replacePreviousOperand(display, value) : changeDisplay(value)
  }

  if (value.match(/\(/)) {
    let copy = display
    copy = copy.trim()
    return copy[copy.length - 1].match(/[0-9]/) ? ownValue(`${display} * ${value}`) : changeDisplay(value)
  }

  if (value.match(/\)/)) {
    return changeDisplay(value)
  }

  if (value.match(/\./)) {
    let copy = display
    copy = copy.trim()
    const array = copy.split(' ')
    if (array[array.length - 1].match(/\./)) {
      return
    }
    if (array[array.length - 1].match(/\)/)) {
      return ownValue(`${display} * 0${value}`)
    }
    return copy[copy.length - 1].match(/[0-9]/) ? changeDisplay(value) : ownValue(`${display} 0${value}`)
  }

  if (value.match(/c/i)) {
    setDefault()
  }

  if (value.match(/ce/i)) {
    ownValue(deleteLastItem(display))
  }

}
