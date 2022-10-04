/* CONSTANTS */
import {
  LightTheme,
  DarkTheme,
  DEFAULT_THEME_VALUE,
} from '@/constants'
/* ACTION TYPES */
import {
  CHANGE_THEME_OBJECT,
  CHANGE_THEME_VALUE,
} from '@/actions/actionTypes'

const INITIAL_STATE = {
  themeValue: DEFAULT_THEME_VALUE,
  theme: LightTheme,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_THEME_OBJECT:
      return {
        ...state,
        theme: action.theme,
      }

      case CHANGE_THEME_VALUE:
        return {
          ...state,
          themeValue: action.themeValue,
        }

        default:
          return state
  }
}
export default reducer
