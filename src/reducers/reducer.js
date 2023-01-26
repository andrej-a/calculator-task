/* CONSTANTS */
/* ACTION TYPES */
import {
  ADD_ITEM_TO_HISTORY,
  CHANGE_DISPLAY_VALUE,
  CHANGE_THEME_OBJECT,
  CHANGE_THEME_VALUE,
  CLEAR_ALL_DATA,
  SET_DEFAULT_VALUE,
  SET_OWN_VALUE,
} from '@/actions/actionTypes'
import {
  DarkTheme,
  DEFAULT_DISPLAY_VALUE,
  DEFAULT_THEME_VALUE,
  LightTheme,
} from '@/constants'

const INITIAL_STATE = {
  themeValue: DEFAULT_THEME_VALUE,
  theme: LightTheme,
  history: [],
  display: DEFAULT_DISPLAY_VALUE,
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

    case ADD_ITEM_TO_HISTORY:
      return {
        ...state,
        history: [action.history, ...state.history],
      }

    case CHANGE_DISPLAY_VALUE:
      return {
        ...state,
        display: state.display + action.display,
      }

    case SET_OWN_VALUE:
      return {
        ...state,
        display: action.ownValue,
      }

    case SET_DEFAULT_VALUE:
      return {
        ...state,
        display: DEFAULT_DISPLAY_VALUE,
      }

    case CLEAR_ALL_DATA:
      return {
        ...state,
        display: action.defaultDataObject.display,
        history: action.defaultDataObject.history,
      }

    default:
      return state
  }
}
export default reducer
