import { DarkTheme, DEFAULT_DISPLAY_VALUE, DEFAULT_THEME_VALUE, LightTheme } from '@/constants';

import {
    ADD_ITEM_TO_HISTORY,
    CHANGE_DISPLAY_VALUE,
    CHANGE_THEME_OBJECT,
    CHANGE_THEME_VALUE,
    CLEAR_ALL_DATA,
    SET_DEFAULT_VALUE,
    SET_EXTENSION,
    SET_OWN_VALUE
} from './actionTypes';


export const changeTheme = payload => ({
    type: CHANGE_THEME_OBJECT,
    payload
});

export const changeThemeValue = payload => ({
    type: CHANGE_THEME_VALUE,
    payload
});

export const addItemToHistory = payload => ({
    type: ADD_ITEM_TO_HISTORY,
    payload
});

export const changeDisplayValue = payload => ({
    type: CHANGE_DISPLAY_VALUE,
    payload
});

export const setOwnValue = payload => ({
    type: SET_OWN_VALUE,
    payload
});

export const setDefaultValue = () => ({
    type: SET_DEFAULT_VALUE
});

export const clearAllData = () => ({
    type: CLEAR_ALL_DATA,
    payload: {
        display: DEFAULT_DISPLAY_VALUE,
        expression: '',
        history: []
    }
});

export const setExtension = payload => ({
    type: SET_EXTENSION,
    payload
});

