import { bindActionCreators } from 'redux';

import { setExtension,setOwnValue } from '@/redux/actions/actions';
import { store } from '@/redux/store';

import checkPriority from './checkPriority';
import cutZeros from './cutZeros';
import doCorrectValue from './doCorrectValue';
import execution from './execution';

const { dispatch } = store;

const { ownValue, SET_EXPRESSION } = bindActionCreators(
    {
        ownValue: setOwnValue,
        SET_EXPRESSION: setExtension
    },
    dispatch
);
const getResult = display => {
    let copyDisplay = display;
    if (copyDisplay.trim()[0] === '(') {
        copyDisplay = `1 * ${display}`;
    }
    const expression = doCorrectValue(copyDisplay.split(' ')).filter(Boolean);
    let numberStack = [];
    let operatorsStack = [];
    for (let i = 0; i <= expression.length + 1;) {

        console.log(operatorsStack, `OPERATOR ITERATION ${i}`);
        console.log(numberStack, `NUMBER ITERATION ${i}`);
        console.log('---------');

        if (i >= expression.length) {
            console.log(`LENGTH IS ${i}, HERE`);
            const previousOperator = operatorsStack[operatorsStack.length - 1];
            const stacks = execution(previousOperator, {numberStack, operatorsStack});
            numberStack = stacks.numberStack;
            operatorsStack = stacks.operatorsStack;
            ownValue(cutZeros(Number(stacks.numberStack.at(-1)).toFixed(3)));
            SET_EXPRESSION(display);
            console.log(stacks.numberStack, stacks.operatorsStack, 'STACKS');
            i += 1;
            continue;
        }

        const item = expression[i];

        if (item.match(/[0-9]/)) {
            numberStack.push(item);
            i++;
            continue;
        }

        if (item.match(/[(]/)) {
            operatorsStack.push(item);
            i++;
            continue;
        }
        if (item.match(/[)]/)) {
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

        if (item.match(/[*-/+/%/√^]/)) {
            if (!operatorsStack.length) {
                operatorsStack.push(item);
                i++;
            } else {
                const previousOperator = operatorsStack[operatorsStack.length - 1];
                if (previousOperator.match(/[(]/)) {
                    operatorsStack.push(item);
                    i++;
                    continue;
                }
                if (checkPriority(item, previousOperator)) {
                    const stacks = execution(previousOperator, {numberStack, operatorsStack});
                    numberStack = stacks.numberStack;
                    operatorsStack = stacks.operatorsStack;
                    continue;
                    } else {
                    operatorsStack.push(item);
                    i++;
                }
            }
        }
    }
};

export default getResult;
