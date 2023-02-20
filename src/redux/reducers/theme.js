import { DEFAULT_THEME_VALUE } from '@/constants';
import { themeOptions } from '@/styles';

import { CHANGE_THEME_OBJECT, CHANGE_THEME_VALUE } from '../actions/actionTypes';

const THEME_STATE = {
    themeValue: DEFAULT_THEME_VALUE,
    theme: themeOptions.lightTheme,
};

const themeReducer = (state = THEME_STATE, { type, payload }) => {
    switch (type) {
        case CHANGE_THEME_OBJECT:
            return {
                ...state,
                theme: payload,
            };

        case CHANGE_THEME_VALUE:
            return {
                ...state,
                themeValue: payload,
            };

        default:
            return state;
    }
};

export default themeReducer;
