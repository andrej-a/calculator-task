import { bindActionCreators } from 'redux';

import { setOwnValue } from '@/redux/actions/actions';
import { store } from '@/redux/store';

import { addition, division, modulo, multiplication, subtraction } from './calculations';
import { checkPriority } from './checkPriority';
import { doCorrectValue } from './doCorrectValue';

const { dispatch } = store;

const { ownValue } = bindActionCreators(
    {
        ownValue: setOwnValue
    },
    dispatch
);
export const getResult = display => {
    let copyString = display;
    if (copyString.trim()[0] === '(') {
        copyString = `1 * ${display}`;
    }
    let processedArray = doCorrectValue(copyString.split(' '));
    processedArray = processedArray.filter(item => item);
    let numberStack = [];
    let operatorsStack = [];
    for (let i = 0; i <= processedArray.length + 1; ) {
        if (i >= processedArray.length) {
            const previousOperator = operatorsStack[operatorsStack.length - 1];
            const previousOperand = +numberStack[numberStack.length - 2];
            const lastOperand = +numberStack[numberStack.length - 1];
            numberStack = numberStack.splice(0, numberStack.length - 2);
            operatorsStack = operatorsStack.splice(0, operatorsStack.length - 1);
            switch (previousOperator) {
                case '/':
                    numberStack.length
                        ? numberStack.push(division(previousOperand, lastOperand).toString())
                        : ownValue((+division(previousOperand, lastOperand).toFixed(3)).toString());
                    break;
                case '*':
                    numberStack.length
                        ? numberStack.push(multiplication(previousOperand, lastOperand).toString())
                        : ownValue((+multiplication(previousOperand, lastOperand).toFixed(3)).toString());
                    break;
                case '+':
                    numberStack.length
                        ? numberStack.push(addition(previousOperand, lastOperand).toString())
                        : ownValue((+addition(previousOperand, lastOperand).toFixed(3)).toString());
                    break;
                case '-':
                    numberStack.length
                        ? numberStack.push(subtraction(previousOperand, lastOperand).toString())
                        : ownValue((+subtraction(previousOperand, lastOperand).toFixed(3)).toString());
                    break;
                case '%':
                    numberStack.length
                        ? numberStack.push(modulo(previousOperand, lastOperand).toString())
                        : ownValue((+modulo(previousOperand, lastOperand).toFixed(3)).toString());
                    break;

                default:
                    break;
            }
            i++;
            continue;
        }

        const item = processedArray[i];
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
            if (previousOperator.match(/[*-/+/%]/)) {
                const previousOperand = +numberStack[numberStack.length - 2];
                const lastOperand = +numberStack[numberStack.length - 1];
                numberStack = numberStack.splice(0, numberStack.length - 2);
                operatorsStack = operatorsStack.splice(0, operatorsStack.length - 1);
                switch (previousOperator.trim()) {
                    case '/':
                        numberStack.push(division(previousOperand, lastOperand).toString());
                        break;
                    case '*':
                        numberStack.push(multiplication(previousOperand, lastOperand).toString());
                        break;
                    case '+':
                        numberStack.push(addition(previousOperand, lastOperand).toString());
                        break;
                    case '-':
                        numberStack.push(subtraction(previousOperand, lastOperand).toString());
                        break;
                    case '%':
                        numberStack.push(modulo(previousOperand, lastOperand).toString());
                        break;

                    default:
                        break;
                }
                continue;
            }
            if (previousOperator.match(/[(]/)) {
                operatorsStack = operatorsStack.splice(0, operatorsStack.length - 1);
                i++;
            }
        }

        if (item.match(/[*-/+/%]/)) {
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
                    const previousOperand = +numberStack[numberStack.length - 2];
                    const lastOperand = +numberStack[numberStack.length - 1];
                    numberStack = numberStack.splice(0, numberStack.length - 2);
                    operatorsStack = operatorsStack.splice(0, operatorsStack.length - 1);
                    switch (previousOperator.trim()) {
                        case '/':
                            numberStack.push(division(previousOperand, lastOperand).toString());
                            break;
                        case '*':
                            numberStack.push(multiplication(previousOperand, lastOperand).toString());
                            break;
                        case '+':
                            numberStack.push(addition(previousOperand, lastOperand).toString());
                            break;
                        case '-':
                            numberStack.push(subtraction(previousOperand, lastOperand).toString());
                            break;
                        case '%':
                            numberStack.push(modulo(previousOperand, lastOperand).toString());
                            break;

                        default:
                            break;
                    }
                } else {
                    operatorsStack.push(item);
                    i++;
                }
            }
        }
    }
};
