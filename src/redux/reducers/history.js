import { ADD_ITEM_TO_HISTORY, CLEAR_HISTORY,HISTORY_SWITCHER } from "@/redux/actions/actionTypes";

const HISTORY_INITIAL_STATE = {
    history: [],
    showHistory: false
};

const historyReducer = (state = HISTORY_INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case HISTORY_SWITCHER:
            return {
                ...state,
                showHistory: !state.showHistory
            };
        case ADD_ITEM_TO_HISTORY:
            return {
                ...state,
                history: [payload, ...state.history]
            };
        case CLEAR_HISTORY:
            return {
                ...state,
                history: []
            };

        default:
            return state;
    }
};
export default historyReducer;
