export const checkCorrectOperators = (display) => {
    const copy = display;
    const valuesArray = copy
        .trim()
        .split(' ')
        .filter((item) => item);
    return valuesArray[valuesArray.length - 1].match(/[0-9 )]/);
};
