
import { instance as alertor } from 'alertor-library';

import { v4 as uuidv4 } from 'uuid';

import { bindActionCreators } from 'redux';

import {
    DEFAULT_DISPLAY_VALUE,
    UNCORRECT_BRACKETS_MESSAGE,
    UNCORRECT_INPUT_MESSAGE,
    UNCORRECT_OPERATOR_MESSAGE,
} from '@/constants';

import alertorSettings from '@/constants/alertor';

import checkIsValueTooLong from '@/helpers/checkIsValueTooLong';
import { changeDisplayValue, setDefaultValue, setExpression, setOwnValue } from '@/redux/actions/expression';
import { addItemToHistory } from '@/redux/actions/history';
import { store } from '@/redux/store';

import checkCorrectBrakcets from '../helpers/checkCorrectBrakcets';
import checkCorrectOperators from '../helpers/checkCorrectOperators';
import checkIfValueIsExpression from '../helpers/checkIfValueIsExpression';
import deleteLastItem from '../helpers/deleteLastItem';
import replacePreviousOperator from '../helpers/replacePreviousOperator';

import warningMessage from '../helpers/warningMessage';

import getResult from './getResult';

const { dispatch, getState } = store;

const { changeDisplay, ownValue, setDefault, addHistoryItem, SET_EXPRESSION } = bindActionCreators(
    {
        changeDisplay: changeDisplayValue,
        ownValue: setOwnValue,
        setDefault: setDefaultValue,
        addHistoryItem: addItemToHistory,
        SET_EXPRESSION: setExpression,
    },
    dispatch,
);

const controller = value => {
    const { display } = getState().expression;
    let copy = display;
    copy = copy.trim();
    if (getState().expression.expression) {
        SET_EXPRESSION('');
    }

    if (value.match(/[0123456789]/i)) {
        if (checkIsValueTooLong(display)) {
            return;
        }
        if (display === DEFAULT_DISPLAY_VALUE) {
            return ownValue(value);
        }
        return copy[copy.length - 1].match(/\)/) ? ownValue(`${display} * ${value}`) : changeDisplay(value);
    }

    if (value.match(/ \+- /)) {
        const array = copy.split(' ').filter(item => item);
        if (array.at(-1).match(/[0123456789]/gi)) {
            copy = array.slice(0, array.length - 1);
            const number = array.at(-1).match(/-/gi) ? Math.abs(+array.at(-1)) : `-${array.at(-1)}`;
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
            alertor.addAlert({
                ...alertorSettings,
                type: 'warning',
                title: UNCORRECT_INPUT_MESSAGE,
                description: UNCORRECT_INPUT_MESSAGE,
            });
            return;
        }
    }

    if (value.match(/[*/+%-]/)) {
        const array = copy.split(' ').filter(item => item);
        if (array[array.length - 1].match(/\(/)) {
            alertor.addAlert({
                ...alertorSettings,
                type: 'warning',
                title: UNCORRECT_OPERATOR_MESSAGE,
                description: UNCORRECT_OPERATOR_MESSAGE,
            });
            return;
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
            alertor.addAlert({
                ...alertorSettings,
                type: 'warning',
                title: UNCORRECT_INPUT_MESSAGE,
                description: UNCORRECT_INPUT_MESSAGE,
            });
            return;
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
            alertor.addAlert({
                ...alertorSettings,
                type: 'warning',
                title: UNCORRECT_INPUT_MESSAGE,
                description: UNCORRECT_INPUT_MESSAGE,
            });
            return;
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
            alertor.addAlert({
                ...alertorSettings,
                type: 'error',
                title: UNCORRECT_BRACKETS_MESSAGE,
                description: UNCORRECT_BRACKETS_MESSAGE,
            });
            return;
        }

        if (!checkCorrectOperators(display)) {
            alertor.addAlert({
                ...alertorSettings,
                type: 'warning',
                title: UNCORRECT_INPUT_MESSAGE,
                description: UNCORRECT_INPUT_MESSAGE,
            });
            return;
        }

        if (!checkIfValueIsExpression(display)) {
            return;
        }

        if (!checkIfValueIsExpression(display)) {
            return;
        }
        addHistoryItem({
            id: uuidv4(),
            display,
        });
        getResult(display);
    }
};

export default controller;
