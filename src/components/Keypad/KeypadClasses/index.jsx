import React from "react";

import { buttonsObject } from '@/constants';
import { controller } from '@/utils/controller';

import { Key, Wrapper } from '../KeypadFunctional/styles';


class KeypadClasses extends React.Component {
  render() {
    const keypad = buttonsObject.map((button) => {
      const { value } = button;
      return (
        <Key
          data-test={value.trim()}
          onClick={() => {
            controller(value);
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

export default KeypadClasses;
