import React from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";

import { buttonsObject } from '@/constants';
import { controller } from '@/utils/controller';

import { Key, Wrapper } from '../KeypadFunctional/styles';


class KeypadClasses extends React.Component {
  render() {
    const { display } = this.props;
    const keypad = buttonsObject.map((button) => {
      const { value } = button;
      return (
        <Key
          data-test={value.trim()}
          onClick={() => {
            controller(value, display);
          }}
          key={value}>
          {value}
        </Key>
      );
    });

    return (
      <Wrapper>{keypad}</Wrapper>
    )
  }
}

const mapStateToProps = ({ display }) => ({
  display
})

export default connect(mapStateToProps)(KeypadClasses)
