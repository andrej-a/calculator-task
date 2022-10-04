import React from 'react'
import { connect } from 'react-redux'
/* STYLES */
import { HoumeWrapper, DisplayKeypadWrapper } from './components'
/* COMPONENTS */
import History from '@/components/History/History'
import Display from '@/components/Display/Display'
import Keypad from '@/components/Keypad/Keypad'

const Houme = ({ theme }) => {
  return (
    <HoumeWrapper theme={theme}>
      <DisplayKeypadWrapper>
        <Display />
        <Keypad />
      </DisplayKeypadWrapper>
      <History />
    </HoumeWrapper>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(Houme)
