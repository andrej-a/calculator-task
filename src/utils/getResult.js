import { bindActionCreators } from 'redux';

import { setOwnValue } from '@/redux/actions/actions';
import { store } from '@/redux/store';

import { addition, division, modulo, multiplication, sqrt, subtraction, pow } from './calculations';
import { checkPriority } from './checkPriority';
import { doCorrectValue } from './doCorrectValue';
import { execution } from './execution';

const { dispatch } = store;

const { ownValue } = bindActionCreators(
    {
        ownValue: setOwnValue
    },
    dispatch
);
export const getResult = display => {
    let copyDisplay = display;
    if (copyDisplay.trim()[0] === '(') {
        copyDisplay = `1 * ${display}`;
    }
    let expression = doCorrectValue(copyDisplay.split(' ')).filter(Boolean);
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
            ownValue(Number(stacks.numberStack.at(-1)).toFixed(3))
            console.log(numberStack, operatorsStack, 'STACKS');
            i += 2;
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
            if (previousOperator.match(/[*-/+/%/\√\^]/)) {
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

        if (item.match(/[*-/+/%/√\^]/)) {
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
