import React from 'react';

import { buttonsObject } from '@/constants';

import { Key, Wrapper } from '../KeypadFunctional/styles';

class KeypadClasses extends React.PureComponent {
    constructor(props) {
        super(props);
        this.controller = props.controller;
    }

    keypadManager = value => () => {
        this.controller(value);
    }

    render() {
        const keypad = buttonsObject.map(button => {
            const { value } = button;
            return (
              <Key
                data-test={value.trim()}
                onClick={this.keypadManager(value)}
                key={value}>
                {value}
              </Key>
            );
        });

        return <Wrapper>{keypad}</Wrapper>;
    }
}

KeypadClasses.PropTypes = {
    controller: PropTypes.func.isRequired
};

export default KeypadClasses;
