import {
  DarkTheme,
  LightTheme,
  DEFAULT_THEME_VALUE,
} from "@/constants"
import {
  CHANGE_THEME_OBJECT,
  CHANGE_THEME_VALUE,
} from "./actionTypes"

export const changeTheme = theme => ({
  type: CHANGE_THEME_OBJECT,
  theme: theme === DEFAULT_THEME_VALUE ? LightTheme : DarkTheme,
})

export const changeThemeValue = themeValue => ({
  type: CHANGE_THEME_VALUE,
  themeValue: themeValue,
})
