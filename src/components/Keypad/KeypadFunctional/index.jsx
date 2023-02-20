import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import ControlPanel from '@/components/ControlPanel';
import buttons from '@/constants/buttons';
import expressionSelector from '@/redux/selectors/expressionSelector';

import { Key, Wrapper } from '../styles';

const Keypad = React.memo(({ controller }) => {
    const { isKeypadBlocked } = useSelector(expressionSelector);
    const keypadManager = value => () => {
        controller(value);
    };

    return (
        <Wrapper>
            {buttons.map(({ value }) => {
                return (
                    <Key
                        disabled={isKeypadBlocked}
                        data-test={value.trim()}
                        onClick={keypadManager(value)}
                        key={value}>
                        {value}
                    </Key>
                );
            })}
            <ControlPanel />
        </Wrapper>
    );
});

Keypad.propTypes = {
    controller: PropTypes.func.isRequired
};

export default Keypad;
