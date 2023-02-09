import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import ExpressionComponent from './Expression';
import { Border, DisplayWrapper, Value, ValueWrapper } from './styles';

const Display = () => {
    const { display, expression } = useSelector(state => state.main);
    const memoizeDisplay = useMemo(() => display, [display]);
    return (
      <DisplayWrapper>
        <ExpressionComponent expression={expression} />
        <ValueWrapper>
          <Value data-test="display">{memoizeDisplay}</Value>
        </ValueWrapper>
        <Border />
      </DisplayWrapper>
    );
};

export default Display;
