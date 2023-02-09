import { bindActionCreators } from 'redux';

import { setOwnValue } from '@/redux/actions/actions';
import { store } from '@/redux/store';

const { dispatch } = store;

const { ownValue } = bindActionCreators(
    {
        ownValue: setOwnValue
    },
    dispatch
);

const replacePreviousOperator = (display, value) => {
    let copyDisplay = display;
    copyDisplay = copyDisplay.trim();
    copyDisplay = copyDisplay.slice(0, copyDisplay.length - 1);
    ownValue(`${copyDisplay} ${value}`);
};

export default replacePreviousOperator;
