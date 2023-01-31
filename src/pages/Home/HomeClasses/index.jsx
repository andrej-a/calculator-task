import React from 'react';

import DisplayClasses from '@/components/Display/DisplayClasses';
import HistoryClasses from '@/components/History/HistoryClasses';
import KeypadClasses from '@/components/Keypad/KeypadClasses';

import { DisplayKeypadWrapper, HomeWrapper } from '../HomeFunctional/styles';

class HomeClassComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { showHistory } = this.props;
        return (
          <HomeWrapper>
            <DisplayKeypadWrapper>
              <DisplayClasses />
              <KeypadClasses />
            </DisplayKeypadWrapper>
            <HistoryClasses showHistory={showHistory} />
          </HomeWrapper>
        );
    }
}

export default HomeClassComponent;
