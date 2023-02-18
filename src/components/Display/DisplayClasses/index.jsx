import React from 'react';
import { connect } from 'react-redux';

import { Border, DisplayWrapper, Expression,ExpressionWrapper,Value, ValueWrapper  } from '@/components/Display/styles';

class DisplayClasses extends React.PureComponent {
    render() {
        const { display, expression } = this.props;
        return (
          <DisplayWrapper>
            <ExpressionWrapper>
              <Expression>{expression}</Expression>
            </ExpressionWrapper>
            <ValueWrapper>
              <Value data-test="display">{display}</Value>
            </ValueWrapper>
            <Border />
          </DisplayWrapper>
        );
    }
}

const mapStateToProps = ({ expression }) => {
    return {
        display: expression.display,
        expression: expression.expression
    };
};

export default connect(mapStateToProps)(DisplayClasses);
