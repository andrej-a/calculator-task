import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { Border, DisplayWrapper, Value, ValueWrapper } from './styles';
import ExpressionComponent from './Expression';

const Display = React.memo(() => {
    const { display, expression } = useSelector((state) => state);
    return (
        <DisplayWrapper>
            <ExpressionComponent expression={expression} />
            <ValueWrapper>
                <Value data-test="display">{display}</Value>
            </ValueWrapper>
            <Border />
        </DisplayWrapper>
    );
});

export default Display;
