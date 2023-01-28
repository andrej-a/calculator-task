export const doCorrectValue = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i - 1] === '(' && array[i + 1] === ')') {
            const firstPart = array.slice(0, i);
            const secondPart = array.slice(i + 1);
            return doCorrectValue([...firstPart, array[i], ' * ', '1', ...secondPart]);
        }
        continue;
    }
    return array;
};
