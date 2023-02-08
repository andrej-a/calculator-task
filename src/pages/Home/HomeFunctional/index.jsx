import PropTypes from 'prop-types';
import React from 'react';
import { controller } from '@/utils/controller';
import Display from '@/components/Display/DisplayFunctional';
import History from '@/components/History/HistoryFunctional';
import Keypad from '@/components/Keypad/KeypadFunctional';

import { DisplayKeypadWrapper, HomeWrapper } from './styles';

const Home = () => (
  <HomeWrapper>
    <DisplayKeypadWrapper>
      <Display />
      <Keypad controller={controller}/>
    </DisplayKeypadWrapper>
    <History />
  </HomeWrapper>
);
export default Home;
