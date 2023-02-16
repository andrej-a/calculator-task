import React from 'react';
import { connect } from 'react-redux';

import { Expression, ExpressionWrapper } from '@/components/Display/DisplayFunctional/styles';

class ExpressionComponent extends React.Component {
    render() {
        const { expression } = this.props;
        return (
          <ExpressionWrapper>
            <Expression>{expression}</Expression>
          </ExpressionWrapper>
        );
    }
}

const mapStateToProps = ({ expression }) => ({
    expression: expression.expression,
});

export default connect(mapStateToProps)(ExpressionComponent);
