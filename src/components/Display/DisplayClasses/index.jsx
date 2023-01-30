import React from "react";
import PropTypes from 'prop-types';

import { Border, DisplayWrapper, Value, ValueWrapper } from '@/components/Display/DisplayFunctional/styles';
import { connect } from "react-redux";
import ExpressionComponent from "./Expression";

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

const mapStateToProps = ({ display }) => ({
  display
})

export default connect(mapStateToProps)(DisplayClasses);

