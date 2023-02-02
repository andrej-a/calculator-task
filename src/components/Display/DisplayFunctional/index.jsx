import React from 'react';
import { useSelector } from 'react-redux';

import ExpressionComponent from './Expression';
import { Border, DisplayWrapper, Value, ValueWrapper } from './styles';

const Display = React.memo(() => {
    const { display, expression } = useSelector(state => state.main);
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
