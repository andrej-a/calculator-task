import React from 'react';
import { connect } from 'react-redux';

import { Border, DisplayWrapper, Value, ValueWrapper } from '@/components/Display/DisplayFunctional/styles';

import ExpressionComponent from './Expression';

class DisplayClasses extends React.PureComponent {
    render() {
        const { display } = this.props;
        return (
          <DisplayWrapper>
            <ExpressionComponent />
            <ValueWrapper>
              <Value data-test="display">{display}</Value>
            </ValueWrapper>
            <Border />
          </DisplayWrapper>
        );
    }
}

const mapStateToProps = ( { main } ) => {
    return {
        display: main.display
    }
};

export default connect(mapStateToProps)(DisplayClasses);
