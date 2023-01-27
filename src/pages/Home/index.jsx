import PropTypes from 'prop-types'
import React from 'react'

import Display from '@/components/Display'
import History from '@/components/History/History'
import Keypad from '@/components/Keypad/Keypad'

import { DisplayKeypadWrapper, HoumeWrapper } from './components'

const Houme = ({ showHistory }) => (
  <HoumeWrapper>
    <DisplayKeypadWrapper>
      <Display />
      <Keypad />
    </DisplayKeypadWrapper>
    <History showHistory={showHistory} />
  </HoumeWrapper>
)

Houme.propTypes = {
  showHistory: PropTypes.bool,
}
export default Houme
