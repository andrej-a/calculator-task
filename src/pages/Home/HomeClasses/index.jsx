import React from 'react';

import HistoryClasses from '@/components/History/HistoryClasses';
import DisplayClasses from '@/components/Display/DisplayClasses';
import KeypadClasses from '@/components/Keypad/KeypadClasses';
import { DisplayKeypadWrapper, HoumeWrapper } from '../HomeFunctional/styles';

class HomeClassComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { showHistory } = this.props;
    return (
      <HoumeWrapper>
        <DisplayKeypadWrapper>
          <DisplayClasses />
          <KeypadClasses />
        </DisplayKeypadWrapper>
        <HistoryClasses />
      </HoumeWrapper>
    );
  }
}

export default HomeClassComponent;
