import { bindActionCreators } from 'redux'

/* CONSTANTS */
import { WARNING_MESSAGE_TIMEOUT } from '@/constants'
/* ACTIONS */
import { setOwnValue } from '@/redux/actions/actions'
import { store } from '@/store'
/* VARYABLES */
const { dispatch } = store

const { ownValue } = bindActionCreators(
  {
    ownValue: setOwnValue,
  },
  dispatch,
)

export const warningMessage = (display, message) => {
  ownValue(message)

  setTimeout(() => {
    ownValue(display)
  }, WARNING_MESSAGE_TIMEOUT)
}
