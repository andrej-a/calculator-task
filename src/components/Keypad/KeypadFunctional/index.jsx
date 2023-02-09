import PropTypes from 'prop-types';
import React from 'react';

import buttonsObject from '@/constants/buttons';

import { Key, Wrapper } from './styles';

const Keypad = React.memo(({ controller }) => {
    const keypadManager = value => () => {
        controller(value);
    };
    const keypad = buttonsObject.map(button => {
        const { value } = button;
        return (
          <Key
            data-test={value.trim()}
            onClick={keypadManager(value)}
            key={value}>
            {value}
          </Key>
        );
    });
    return <Wrapper>{keypad}</Wrapper>;
});

Keypad.propTypes = {
    controller: PropTypes.func.isRequired
};

export default Keypad;
