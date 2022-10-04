import {
  DarkTheme,
  LightTheme,
  DEFAULT_THEME_VALUE,
} from "@/constants"
import {
  CHANGE_THEME_OBJECT,
  CHANGE_THEME_VALUE,
  ADD_ITEM_TO_HISTORY,
  CHANGE_DISPLAY_VALUE,
  SET_OWN_VALUE,
  SET_DEFAULT_VALUE,
} from "./actionTypes"

export const changeTheme = theme => ({
  type: CHANGE_THEME_OBJECT,
  theme: theme === DEFAULT_THEME_VALUE ? LightTheme : DarkTheme,
})

export const changeThemeValue = themeValue => ({
  type: CHANGE_THEME_VALUE,
  themeValue: themeValue,
})

export const addItemToHistory = historyItem => ({
  type: ADD_ITEM_TO_HISTORY,
  history: historyItem,
})

export const changeDisplayValue = displayValue => ({
  type: CHANGE_DISPLAY_VALUE,
  display: displayValue,
})

export const setOwnValue = ownValue => ({
  type: SET_OWN_VALUE,
  ownValue: ownValue,
})

export const setDefaultValue = () => ({
  type: SET_DEFAULT_VALUE,
})
