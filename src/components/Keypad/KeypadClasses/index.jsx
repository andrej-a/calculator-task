import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ControlPanel from '@/components/ControlPanel';
import buttons from '@/constants/buttons';

import { Key, Wrapper } from '../styles';

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

        return (
          <Wrapper>
            {
            buttons.map(({ value }) => {
            return (
              <Key
                disabled={isKeypadBlocked}
                data-test={value.trim()}
                onClick={this.keypadManager(value)}
                key={value}>
                {value}
              </Key>
            );
        })
}
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
