import {
  store,
} from "@/store"
import {
  bindActionCreators,
} from "redux"
/* ACTIONS */
import {
  setOwnValue,
} from "@/actions/actions"

/* CONSTANTS */
import {
  WARNING_MESSAGE_TIMEOUT,
} from "@/constants"
/* VARYABLES */
const {
  dispatch,
} = store

const {
  ownValue,
} = bindActionCreators({
  ownValue: setOwnValue,
}, dispatch)


export const warningMessage = (display, message) => {
  ownValue(message)

  setTimeout(() => {
    ownValue(display)
  }, WARNING_MESSAGE_TIMEOUT)
}
