const checkIfValueIsExpression = display => {
    return (
        display
            .replace(/[()]/g, '')
            .split(' ')
            .filter(Boolean).length !== 1
    );
};

export default checkIfValueIsExpression;
