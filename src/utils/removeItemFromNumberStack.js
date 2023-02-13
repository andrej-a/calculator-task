const removeItemFromNumberStack = (numberStack, deleteItemsCount) => {
    return numberStack.splice(0, numberStack.length - deleteItemsCount);
};

export default removeItemFromNumberStack;
