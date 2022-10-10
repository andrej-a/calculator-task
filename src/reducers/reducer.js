/* CONSTANTS */
import {
  LightTheme,
  DarkTheme,
  DEFAULT_THEME_VALUE,
  DEFAULT_DISPLAY_VALUE,
} from '@/constants'
/* ACTION TYPES */
import {
  CHANGE_THEME_OBJECT,
  CHANGE_THEME_VALUE,
  ADD_ITEM_TO_HISTORY,
  CHANGE_DISPLAY_VALUE,
  SET_OWN_VALUE,
  SET_DEFAULT_VALUE,
  CLEAR_ALL_DATA,
} from '@/actions/actionTypes'

const INITIAL_STATE = {
  themeValue: DEFAULT_THEME_VALUE,
  theme: DarkTheme,
  history: [],
  display: '7 - 7 + 11 + 1 + 1 + 4 + 4 + 41 + 51 + 4 + 4 + 4 + 4 + 4 + 44 + 4',
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
