import { DEFAULT_DISPLAY_VALUE, DEFAULT_THEME_VALUE, LightTheme } from '@/constants';
import {
    ADD_ITEM_TO_HISTORY,
    CHANGE_DISPLAY_VALUE,
    CHANGE_THEME_OBJECT,
    CHANGE_THEME_VALUE,
    CLEAR_ALL_DATA,
    HISTORY_SWITCHER,
    MENU_SWITCHER,
    SET_DEFAULT_VALUE,
    SET_EXTENSION,
    SET_OWN_VALUE} from '@/redux/actions/actionTypes';

const INITIAL_STATE = {
    history: [],
    display: '0',
    expression: '',
    menu: false,
    showHistory: false
};

const THEME_STATE = {
    themeValue: DEFAULT_THEME_VALUE,
    theme: LightTheme,
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
        case HISTORY_SWITCHER:
            return {
                ...state,
                showHistory: !state.showHistory
            };

        case MENU_SWITCHER:
            return {
                ...state,
                menu: !state.menu
            };

        case ADD_ITEM_TO_HISTORY:
            return {
                ...state,
                history: [payload, ...state.history]
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
