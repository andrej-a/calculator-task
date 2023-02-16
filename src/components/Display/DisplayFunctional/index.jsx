import React from 'react';
import { useSelector } from 'react-redux';

import expressionSelector from '@/redux/selectors/expressionSelector';

import ExpressionComponent from './Expression';
import { Border, DisplayWrapper, Value, ValueWrapper } from './styles';

const Display = () => {
    const {display, expression} = useSelector(expressionSelector);
    return (
      <DisplayWrapper>
        <ExpressionComponent expression={expression} />
        <ValueWrapper>
          <Value data-test="display">{display}</Value>
        </ValueWrapper>
        <Border />
      </DisplayWrapper>
    );
};

export default Display;
