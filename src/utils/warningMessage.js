import { bindActionCreators } from 'redux';

import { WARNING_MESSAGE_TIMEOUT } from '@/constants';
import { setOwnValue } from '@/redux/actions/actions';
import { store } from '@/redux/store';
const { dispatch } = store;

const { ownValue } = bindActionCreators(
    {
        ownValue: setOwnValue
    },
    dispatch
);

export const warningMessage = (display, message) => {
    ownValue(message);

    setTimeout(() => {
        ownValue(display);
    }, WARNING_MESSAGE_TIMEOUT);
};
