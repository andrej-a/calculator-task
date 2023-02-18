import { DEFAULT_DISPLAY_VALUE } from '@/constants';

import {
    CHANGE_DISPLAY_VALUE,
    CLEAR_ALL_DATA,
    IS_KEYPAD_BLOCKED,
    MENU_SWITCHER,
    SET_DEFAULT_VALUE,
    SET_EXTENSION,
    SET_OWN_VALUE} from './actionTypes';

export const isKeypadBlocked = () => ({
    type: IS_KEYPAD_BLOCKED
});

export const switchMenu = ({
    type: MENU_SWITCHER
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
        expression: ''
    }
});

export const setExpression = payload => ({
    type: SET_EXTENSION,
    payload
});

