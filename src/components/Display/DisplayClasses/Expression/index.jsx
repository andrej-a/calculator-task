import React from 'react';
import { connect } from 'react-redux';

import { Expression, ExpressionWrapper } from '../../DisplayFunctional/styles';

class ExpressionComponent extends React.PureComponent {
    render() {
        const { expression } = this.props;
        return (
          <ExpressionWrapper>
            <Expression>{expression}</Expression>
          </ExpressionWrapper>
        );
    }
}

const mapStateToProps = ({ main }) => ({
    expression: main.expression,
});

export default connect(mapStateToProps)(ExpressionComponent);
