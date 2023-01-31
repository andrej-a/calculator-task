import PropTypes from 'prop-types';
import React from 'react';

import Display from '@/components/Display/DisplayFunctional';
import History from '@/components/History/HistoryFunctional';
import Keypad from '@/components/Keypad/KeypadFunctional';

import { DisplayKeypadWrapper, HomeWrapper } from './styles';

const home = ({ showHistory }) => (
  <HomeWrapper>
    <DisplayKeypadWrapper>
      <Display />
      <Keypad />
    </DisplayKeypadWrapper>
    <History showHistory={showHistory} />
  </HomeWrapper>
);

home.propTypes = {
    showHistory: PropTypes.bool
};
export default home;
