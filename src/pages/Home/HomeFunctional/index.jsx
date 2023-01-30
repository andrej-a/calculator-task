import PropTypes from 'prop-types';
import React from 'react';

import Display from '@/components/Display/DisplayFunctional';
import History from '@/components/History/HistoryFunctional';
import Keypad from '@/components/Keypad/KeypadFunctional';

import { DisplayKeypadWrapper, HoumeWrapper } from './styles';

const Houme = ({ showHistory }) => (
  <HoumeWrapper>
    <DisplayKeypadWrapper>
      <Display />
      <Keypad />
    </DisplayKeypadWrapper>
    <History showHistory={showHistory} />
  </HoumeWrapper>
);

Houme.propTypes = {
  showHistory: PropTypes.bool
};
export default Houme;
