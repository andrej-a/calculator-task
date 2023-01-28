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
} from '@/redux/actions/actionTypes';

const INITIAL_STATE = {
    themeValue: DEFAULT_THEME_VALUE,
    theme: LightTheme,
    history: [],
    display: DEFAULT_DISPLAY_VALUE,
    extension: ''
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_THEME_OBJECT:
            return {
                ...state,
                theme: action.theme
            };

        case CHANGE_THEME_VALUE:
            return {
                ...state,
                themeValue: action.themeValue
            };

        case ADD_ITEM_TO_HISTORY:
            return {
                ...state,
                history: [action.history, ...state.history]
            };

        case CHANGE_DISPLAY_VALUE:
            return {
                ...state,
                display: state.display + action.display
            };

        case SET_OWN_VALUE:
            return {
                ...state,
                display: action.ownValue
            };

        case SET_DEFAULT_VALUE:
            return {
                ...state,
                display: DEFAULT_DISPLAY_VALUE
            };

        case CLEAR_ALL_DATA:
            return {
                ...state,
                display: action.defaultDataObject.display,
                history: action.defaultDataObject.history,
                extension: action.defaultDataObject.extension
            };

        case SET_EXTENSION:
            return {
                ...state,
                extension: action.extensionValue
            };

        default:
            return state;
    }
};
export default reducer;
