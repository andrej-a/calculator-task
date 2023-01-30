import React from "react";
import PropTypes from 'prop-types';

import { Border, DisplayWrapper, Extension, ExtensionWrapper, Value, ValueWrapper } from '@/components/Display/DisplayFunctional/styles';
import { connect } from "react-redux";

class DisplayClasses extends React.Component {
  render() {
    const { display, extension } = this.props;
    return (
      <DisplayWrapper>
        <ExtensionWrapper>
          <Extension>{extension}</Extension>
        </ExtensionWrapper>
        <ValueWrapper>
          <Value data-test="display">{display}</Value>
        </ValueWrapper>
        <Border />
      </DisplayWrapper>
    );
  }
}

const mapStateToProps = ({ display, extension }) => ({
  display, extension
})

export default connect(mapStateToProps)(DisplayClasses);

