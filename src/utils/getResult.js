import { bindActionCreators } from 'redux';

import { setExpression, setOwnValue } from '@/redux/actions';
import { store } from '@/redux/store';

import execution from './execution';
import checkPriority from './helpers/checkPriority';
import cutZeros from './helpers/cutZeros';
import doCorrectValue from './helpers/doCorrectValue';

const { dispatch } = store;

const { ownValue, SET_EXPRESSION } = bindActionCreators(
    {
        ownValue: setOwnValue,
        SET_EXPRESSION: setExpression
    },
    dispatch
);
const getResult = display => {
    const copyDisplay = display;
    const expression = doCorrectValue(copyDisplay.split(' ')).filter(Boolean);
    let numberStack = [];
    let operatorsStack = [];
    for (let i = 0; i <= expression.length + 2;) {
        if (i >= expression.length) {
            const previousOperator = operatorsStack[operatorsStack.length - 1];
            const stacks = execution(previousOperator, {numberStack, operatorsStack});
            numberStack = stacks.numberStack;
            operatorsStack = stacks.operatorsStack;
            ownValue(cutZeros(Number(stacks.numberStack[numberStack.length - 1]).toFixed(3)));
            SET_EXPRESSION(display);
            i += 1;
            continue;
        }

        const current = expression[i];

        if (current.match(/[0-9]/)) {
            numberStack.push(current);
            i++;
            continue;
        }

        if (current.match(/[(]/)) {
            operatorsStack.push(current);
            i++;
            continue;
        }
        if (current.match(/[)]/)) {
            const previousOperator = operatorsStack[operatorsStack.length - 1];
            if (previousOperator.match(/[*-/+/%/√^]/)) {
                const stacks = execution(previousOperator, {numberStack, operatorsStack});
                numberStack = stacks.numberStack;
                operatorsStack = stacks.operatorsStack;
                continue;
            }
            if (previousOperator.match(/[(]/)) {
                operatorsStack = operatorsStack.splice(0, operatorsStack.length - 1);
                i++;
            }
        }

        if (current.match(/[*-/+/%/√^]/)) {
            if (!operatorsStack.length) {
                operatorsStack.push(current);
                i++;
            } else {
                const previousOperator = operatorsStack[operatorsStack.length - 1];
                if (previousOperator.match(/[(]/)) {
                    operatorsStack.push(current);
                    i++;
                    continue;
                }
                if (checkPriority(current, previousOperator)) {
                    const stacks = execution(previousOperator, {numberStack, operatorsStack});
                    numberStack = stacks.numberStack;
                    operatorsStack = stacks.operatorsStack;
                    continue;
                    } else {
                    operatorsStack.push(current);
                    i++;
                }
            }
        }
    }
};

export default getResult;
