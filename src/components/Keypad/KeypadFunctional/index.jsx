import React from 'react';
import { useSelector } from 'react-redux';

import { buttonsObject } from '@/constants';
import { controller } from '@/utils/controller';

import { Key, Wrapper } from './styles';

const Keypad = React.memo(() => {
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
    return <Wrapper>{keypad}</Wrapper>;
})

export default Keypad;
