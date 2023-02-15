import { DEFAULT_DISPLAY_VALUE, DEFAULT_THEME_VALUE } from '@/constants';
import {
    CHANGE_DISPLAY_VALUE,
    CHANGE_THEME_OBJECT,
    CHANGE_THEME_VALUE,
    CLEAR_ALL_DATA,
    MENU_SWITCHER,
    SET_DEFAULT_VALUE,
    SET_EXTENSION,
    SET_OWN_VALUE} from '@/redux/actions/actionTypes';
import { themeOptions } from '@/styles';

const INITIAL_STATE = {
    display: '5 + 5',
    expression: '',
    menu: false,
};

const THEME_STATE = {
    themeValue: DEFAULT_THEME_VALUE,
    theme: themeOptions.lightTheme,
};

export const themeReducer = (state = THEME_STATE, {type, payload}) => {
    switch (type) {
        case CHANGE_THEME_OBJECT:
            return {
                ...state,
                theme: payload
            };

        case CHANGE_THEME_VALUE:
            return {
                ...state,
                themeValue: payload
            };

        default:
            return state;
    }
};

const reducer = (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case MENU_SWITCHER:
            return {
                ...state,
                menu: !state.menu
            };
        case CHANGE_DISPLAY_VALUE:
            return {
                ...state,
                display: state.display + payload
            };

        case SET_OWN_VALUE:
            return {
                ...state,
                display: payload
            };

        case SET_DEFAULT_VALUE:
            return {
                ...state,
                display: DEFAULT_DISPLAY_VALUE
            };

        case CLEAR_ALL_DATA:
            return {
                ...state,
                display: payload.display,
                history: payload.history,
                expression: payload.expression
            };

        case SET_EXTENSION:
            return {
                ...state,
                expression: payload
            };

        default:
            return state;
    }
};
export default reducer;
