import { v4 as uuidv4 } from 'uuid';

import { bindActionCreators } from 'redux';

import {
    DEFAULT_DISPLAY_VALUE,
    MAX_LENGTH_EXPRESSION,
    TOO_LONG_EXPRESSION,
    UNCORRECT_BRACKETS_MESSAGE,
    UNCORRECT_INPUT_MESSAGE,
    UNCORRECT_OPERATOR_MESSAGE
} from '@/constants';
import {
    changeDisplayValue,
    setDefaultValue,
    setExpression,
    setOwnValue
} from '@/redux/actions';
import { addItemToHistory } from '@/redux/actions/history';
import { store } from '@/redux/store';

import getResult from './getResult';
import checkCorrectBrakcets from './helpers/checkCorrectBrakcets';
import checkCorrectOperators from './helpers/checkCorrectOperators';
import checkIfValueIsExpression from './helpers/checkIfValueIsExpression';
import deleteLastItem from './helpers/deleteLastItem';
import replacePreviousOperator from './helpers/replacePreviousOperator';
import warningMessage from './helpers/warningMessage';

const { dispatch, getState } = store;

const { changeDisplay, ownValue, setDefault, addHistoryItem, SET_EXPRESSION } = bindActionCreators(
    {
        changeDisplay: changeDisplayValue,
        ownValue: setOwnValue,
        setDefault: setDefaultValue,
        addHistoryItem: addItemToHistory,
        SET_EXPRESSION: setExpression
    },
    dispatch
);

const controller = value => {
    const { display } = getState().expression;
    let copy = display;
    copy = copy.trim();
    if (getState().expression.expression) {
        SET_EXPRESSION('');
    }
    if (!value.match(/[=ce]/gi) && display.length >= MAX_LENGTH_EXPRESSION) {
        return warningMessage(display, `${TOO_LONG_EXPRESSION} ${MAX_LENGTH_EXPRESSION}`);
    }
    if (value.match(/[0123456789]/i)) {
        if (display === DEFAULT_DISPLAY_VALUE) {
            return ownValue(value);
        }
        return copy[copy.length - 1].match(/\)/) ? ownValue(`${display} * ${value}`) : changeDisplay(value);
    }

    if (value.match(/ \+- /)) {
        const array = copy.split(' ').filter(item => item);
        if (array.at(-1).match(/[0123456789]/gi)) {
            copy = array.slice(0, array.length - 1);
            const number = array.at(-1).match(/-/gi) ?  Math.abs(+array.at(-1)) : `-${array.at(-1)}`;
            return ownValue(`${copy.join(' ')} ${number}`);
        }
        return;
    }

    if (value.match(/[√^]/)) {
        const array = copy.split(' ').filter(item => item);
        if (array[array.length - 1].match(/[0123456789]/i)) {
            copy = array.slice(0, array.length - 1);
            return ownValue(`${copy.join(' ')}${value}( ${array[array.length - 1]} )`);
        }

        if (array[array.length - 1].match(/[*\-/+%]/i)) {
            return warningMessage(display, UNCORRECT_INPUT_MESSAGE);
        }
    }

    if (value.match(/[*/+%-]/)) {
        const array = copy.split(' ').filter(item => item);
        if (array[array.length - 1].match(/\(/)) {
            return warningMessage(display, UNCORRECT_OPERATOR_MESSAGE);
        }
        if (array[array.length - 1].trim() === '-' && array[array.length - 2].match(/\(/)) {
            replacePreviousOperator(display, '');
            return;
        }
        return copy[copy.length - 1].match(/[*-/+/.%]/)
            ? replacePreviousOperator(display, value)
            : changeDisplay(value);
    }

    if (value.match(/\(/)) {
        if (copy[copy.length - 1].match(/\./)) {
            return warningMessage(display, UNCORRECT_INPUT_MESSAGE);
        }
        if (copy.length >= 1 && !copy.match(/[*-/+/(%]/gi)) {
            return ownValue(value);
        }
        if (copy[copy.length - 1].match(/[0-9]/) && copy.length > 1) {
            return ownValue(`${display} * ${value}`);
        }
        if (copy[copy.length - 1].match(/[*-/+/(%]/)) return changeDisplay(value);
    }

    if (value.match(/\)/)) {
        if (copy[copy.length - 1].match(/[*-/+/(%]/)) {
            return warningMessage(display, UNCORRECT_INPUT_MESSAGE);
        }
        return changeDisplay(value);
    }

    if (value.match(/\./)) {
        const array = copy.split(' ');
        if (array[array.length - 1].match(/\./)) {
            return;
        }
        if (array[array.length - 1].match(/\)/)) {
            return ownValue(`${display} * 0${value}`);
        }
        if (array[array.length - 1].match(/[0-9]/)) {
            return ownValue(`${display.trim()}${value}`);
        }
        if (array[array.length - 1].match(/-/) && array[array.length - 2].match(/\(/)) {
            return ownValue(`${display.trim()}0${value}`);
        }
        return ownValue(`${display} 0${value}`);
    }

    if (value.match(/c/i)) {
        setDefault();
        SET_EXPRESSION('');
    }

    if (value.match(/ce/i)) {
        ownValue(deleteLastItem(display));
    }

    if (value.match(/=/)) {
        if (!checkCorrectBrakcets(display)) {
            return warningMessage(display, UNCORRECT_BRACKETS_MESSAGE);
        }

        if (!checkCorrectOperators(display)) {
            return warningMessage(display, UNCORRECT_INPUT_MESSAGE);
        }

        if (!checkIfValueIsExpression(display)) {
            return;
        }
        addHistoryItem({
            id: uuidv4(),
            display
        });
        getResult(display);
    }
};

export default controller;
