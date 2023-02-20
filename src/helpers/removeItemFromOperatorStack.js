const removeItemFromOperatorStack = (operatorsStack, deleteItemsCount) => {
    return operatorsStack.splice(0, operatorsStack.length - deleteItemsCount);
};

export default removeItemFromOperatorStack;
