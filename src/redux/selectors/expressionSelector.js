const expressionSelector = state => ({
    display: state.expression.display,
    expression: state.expression.expression,
    menu: state.expression.menu,
    isKeypadBlocked: state.expression.isKeypadBlocked,
});

export default expressionSelector;
