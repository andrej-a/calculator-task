import React from 'react';
import { useSelector } from 'react-redux';

import expressionSelector from '@/redux/selectors/expressionSelector';

import { DisplayWrapper, Expression,ExpressionWrapper , Value, ValueWrapper } from '../styles';

const Display = () => {
    const { display, expression } = useSelector(expressionSelector);
    return (
      <DisplayWrapper>
        <ExpressionWrapper>
          <Expression>{expression}</Expression>
        </ExpressionWrapper>
        <ValueWrapper>
          <Value data-test="display">{display}</Value>
        </ValueWrapper>
      </DisplayWrapper>
    );
};

export default Display;
