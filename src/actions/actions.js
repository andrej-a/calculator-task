import {
  DarkTheme,
  DEFAULT_DISPLAY_VALUE,
  DEFAULT_THEME_VALUE,
  LightTheme,
} from '@/constants'

import {
  ADD_ITEM_TO_HISTORY,
  CHANGE_DISPLAY_VALUE,
  CHANGE_THEME_OBJECT,
  CHANGE_THEME_VALUE,
  CLEAR_ALL_DATA,
  SET_DEFAULT_VALUE,
  SET_OWN_VALUE,
} from './actionTypes'

export const changeTheme = theme => ({
  type: CHANGE_THEME_OBJECT,
  theme: theme === DEFAULT_THEME_VALUE ? LightTheme : DarkTheme,
})

export const changeThemeValue = themeValue => ({
  type: CHANGE_THEME_VALUE,
  themeValue,
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
  ownValue,
})

export const setDefaultValue = () => ({
  type: SET_DEFAULT_VALUE,
})

export const clearAllData = () => ({
  type: CLEAR_ALL_DATA,
  defaultDataObject: {
    display: DEFAULT_DISPLAY_VALUE,
    history: [],
  },
})
