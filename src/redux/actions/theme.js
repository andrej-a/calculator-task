import { CHANGE_THEME_OBJECT, CHANGE_THEME_VALUE } from "./actionTypes";

export const changeTheme = payload => ({
    type: CHANGE_THEME_OBJECT,
    payload
});

export const changeThemeValue = payload => ({
    type: CHANGE_THEME_VALUE,
    payload
});
