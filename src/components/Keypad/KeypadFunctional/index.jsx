import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

import buttonsObject from '@/constants/buttons';
import ControlPanel from '@/containers/ControlPanel';

import { Key, Wrapper } from './styles';

const Keypad = React.memo(({ controller }) => {
    const { isKeypadBlocked } = useSelector(state => state.expression);
    const keypadManager = value => () => {
        controller(value);
    };
    const keypad = buttonsObject.map(({ value }) => {
        return (
          <Key
            disabled={isKeypadBlocked}
            data-test={value.trim()}
            onClick={keypadManager(value)}
            key={value}>
            {value}
          </Key>
        );
    });
    return (
      <Wrapper>
        {keypad}
        <ControlPanel />
      </Wrapper>
);
});

Keypad.propTypes = {
    controller: PropTypes.func.isRequired
};

export default Keypad;
