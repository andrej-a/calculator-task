import { addition, division, modulo, multiplication, pow,sqrt, subtraction } from './calculations';
import removeItemFromNumberStack from './removeItemFromNumberStack';
import removeItemFromOperatorStack from './removeItemFromOperatorStack';

const execution = (previousOperator, stacks) => {
    let {numberStack, operatorsStack} = stacks;
    const previousOperand = +numberStack[numberStack.length - 2];
    const lastOperand = +numberStack[numberStack.length - 1];

    operatorsStack = removeItemFromOperatorStack(operatorsStack, 1);
    if (previousOperator && previousOperator.trim().match(/[√^]/g)) {
        numberStack = removeItemFromNumberStack(numberStack, 1);
    } else if (previousOperator) {
        numberStack = removeItemFromNumberStack(numberStack, 2);
    }

    switch (previousOperator && previousOperator.trim()) {
        case '^':
            numberStack.push(pow(lastOperand).toString());
            break;
        case '√':
            numberStack.push(sqrt(lastOperand).toString());
            break;
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
    return {numberStack, operatorsStack};
};

export default execution;
