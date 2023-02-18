import { ADD_ITEM_TO_HISTORY, CLEAR_HISTORY, HISTORY_SWITCHER } from "./actionTypes";

export const clearHistory = () => ({
    type: CLEAR_HISTORY
});
export const switchHistory = ({
    type: HISTORY_SWITCHER
});
export const addItemToHistory = payload => ({
    type: ADD_ITEM_TO_HISTORY,
    payload
});
