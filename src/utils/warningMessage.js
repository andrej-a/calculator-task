import {
  bindActionCreators,
} from 'redux'

/* ACTIONS */
import {
  setOwnValue,
} from '@/actions/actions'
/* CONSTANTS */
import {
  WARNING_MESSAGE_TIMEOUT,
} from '@/constants'
import {
  store,
} from '@/store'
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
