import { bindActionCreators } from 'redux';

import { WARNING_MESSAGE_TIMEOUT } from '@/constants';
import { isKeypadBlocked, setOwnValue } from '@/redux/actions/expression';
import { store } from '@/redux/store';

const { dispatch } = store;

const { ownValue, keypadBlocked } = bindActionCreators(
    {
        ownValue: setOwnValue,
        keypadBlocked: isKeypadBlocked,
    },
    dispatch,
);

const warningMessage = (display, message) => {
    ownValue(message);
    keypadBlocked();

    setTimeout(() => {
        ownValue(display);
        keypadBlocked();
    }, WARNING_MESSAGE_TIMEOUT);
};

export default warningMessage;
