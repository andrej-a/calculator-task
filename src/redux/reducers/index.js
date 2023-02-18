import { DEFAULT_DISPLAY_VALUE } from '@/constants';
import {
    CHANGE_DISPLAY_VALUE,
    CLEAR_ALL_DATA,
    IS_KEYPAD_BLOCKED,
    MENU_SWITCHER,
    SET_DEFAULT_VALUE,
    SET_EXTENSION,
    SET_OWN_VALUE,
} from '@/redux/actions/actionTypes';

const INITIAL_STATE = {
    display: DEFAULT_DISPLAY_VALUE,
    expression: '',
    menu: false,
    isKeypadBlocked: false,
};

const reducer = (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case IS_KEYPAD_BLOCKED:
            return {
                ...state,
                isKeypadBlocked: !state.isKeypadBlocked
            };
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
