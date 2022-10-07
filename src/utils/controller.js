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
  UNCORRECT_BRACKETS_MESSAGE,
  UNCORRECT_OPERATOR_MESSAGE,
  UNCORRECT_INPUT_MESSAGE,
  UNCORRECT_DOT_INPUT,
} from "@/constants"
/* UTILS */
import {
  replacePreviousOperator,
} from "./replacePreviousOperator"
import {
  deleteLastItem,
} from './deleteLastItem'
import {
  checkCorrectBrakcets,
} from "./checkCorrectBrakcets"
import {
  warningMessage,
} from "./warningMessage"
import {
  getResult,
} from "./getResult"
import {
  checkCorrectOperators,
} from "./checkCorrectOperators"
/* VARYABLES */
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
      return ownValue(value)
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
      return warningMessage(display, UNCORRECT_OPERATOR_MESSAGE)
    }
    return copy[copy.length - 1].match(/[*-/+/.]/) ? replacePreviousOperator(display, value) : changeDisplay(value)
  }

  if (value.match(/\(/)) {
    let copy = display
    copy = copy.trim()

    if (copy[copy.length - 1].match(/[0-9]/)) {
      return ownValue(`${display} * ${value}`)
    }
    if (copy[copy.length - 1].match(/[*-/+/(]/))
      return changeDisplay(value)
  }

  if (value.match(/\)/)) {
    let copy = display
    copy = copy.trim()

    if (copy[copy.length - 1].match(/[*-/+/(]/)) {
      return warningMessage(display, UNCORRECT_INPUT_MESSAGE)
    }
    return changeDisplay(value)
  }

  if (value.match(/\./)) {
    let copy = display
    copy = copy.trim()

    const array = copy.split(' ')
    if (array[array.length - 1].match(/\./)) {
      return warningMessage(display, UNCORRECT_DOT_INPUT)
    }
    if (array[array.length - 1].match(/\)/)) {
      return ownValue(`${display} * 0${value}`)
    }
    if (array[array.length - 1].match(/[0-9]/)) {
      return ownValue(`${display.trim()}${value}`)
    }
    return ownValue(`${display} 0${value}`)
  }

  if (value.match(/c/i)) {
    setDefault()
  }

  if (value.match(/ce/i)) {
    ownValue(deleteLastItem(display))
  }

  if (value.match(/=/)) {
    if (!checkCorrectBrakcets(display)) {
      return warningMessage(display, UNCORRECT_BRACKETS_MESSAGE)
    }

    if (!checkCorrectOperators(display)) {
      return warningMessage(display, UNCORRECT_INPUT_MESSAGE)
    }

    getResult(display)
  }

}
