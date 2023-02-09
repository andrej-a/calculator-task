
import { addition, division, modulo, multiplication, pow,sqrt, subtraction } from './calculations';

const execution = (previousOperator, stacks) => {
    let {numberStack, operatorsStack} = stacks;
    const previousOperand = +numberStack[numberStack.length - 2];
    const lastOperand = +numberStack[numberStack.length - 1];

    switch (previousOperator && previousOperator.trim()) {
        case '^':
            numberStack = numberStack.splice(0, numberStack.length - 1);
            operatorsStack = operatorsStack.splice(0, operatorsStack.length - 1);
            numberStack.push(pow(lastOperand).toString());
            break;
        case '√':
            numberStack = numberStack.splice(0, numberStack.length - 1);
            operatorsStack = operatorsStack.splice(0, operatorsStack.length - 1);
            numberStack.push(sqrt(lastOperand).toString());
            break;
        case '/':
            numberStack = numberStack.splice(0, numberStack.length - 2);
            operatorsStack = operatorsStack.splice(0, operatorsStack.length - 1);
            numberStack.push(division(previousOperand, lastOperand).toString());
            break;
        case '*':
            numberStack = numberStack.splice(0, numberStack.length - 2);
            operatorsStack = operatorsStack.splice(0, operatorsStack.length - 1);
            numberStack.push(multiplication(previousOperand, lastOperand).toString());
            break;
        case '+':
            numberStack = numberStack.splice(0, numberStack.length - 2);
            operatorsStack = operatorsStack.splice(0, operatorsStack.length - 1);
            numberStack.push(addition(previousOperand, lastOperand).toString());
            break;
        case '-':
            numberStack = numberStack.splice(0, numberStack.length - 2);
            operatorsStack = operatorsStack.splice(0, operatorsStack.length - 1);
            numberStack.push(subtraction(previousOperand, lastOperand).toString());
            break;
        case '%':
            numberStack = numberStack.splice(0, numberStack.length - 2);
            operatorsStack = operatorsStack.splice(0, operatorsStack.length - 1);
            numberStack.push(modulo(previousOperand, lastOperand).toString());
            break;

        default:
            break;
    }
    return {numberStack, operatorsStack};
};

export default execution;
