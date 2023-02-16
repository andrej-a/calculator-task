import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import buttonsObject from '@/constants/buttons';
import ControlPanel from '@/containers/ControlPanel';

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
        const { isKeypadBlocked } = this.props;
        const keypad = buttonsObject.map(({ value }) => {
            return (
              <Key
                disabled={isKeypadBlocked}
                data-test={value.trim()}
                onClick={this.keypadManager(value)}
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
    }
}

KeypadClasses.propTypes = {
    controller: PropTypes.func.isRequired
};

const mapStateToProps = ({expression}) => ({
    isKeypadBlocked: expression.isKeypadBlocked
});

export default connect(mapStateToProps)(KeypadClasses);
