import {
  store,
} from "@/store"

import {
  bindActionCreators,
} from "redux"
/* ACTIONS */
import {
  setOwnValue,
  changeDisplayValue,
} from "@/actions/actions"

const {
  dispatch,
} = store

const {
  ownValue,
  changeDisplay,
} = bindActionCreators({
  ownValue: setOwnValue,
  changeDisplay: changeDisplayValue,
}, dispatch)


export const firstCorrectInput = value => {
  ownValue('')
  changeDisplay(value)
}
