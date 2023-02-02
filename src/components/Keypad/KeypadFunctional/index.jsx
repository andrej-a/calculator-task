import React from 'react';

import { buttonsObject } from '@/constants';
import { controller } from '@/utils/controller';

import { Key, Wrapper } from './styles';

const Keypad = React.memo(() => {
    const keypadManager = (value) => () => {
        controller(value);
    }
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

export default Keypad;
