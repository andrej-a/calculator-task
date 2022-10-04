import React from 'react'
import { connect } from 'react-redux'
/* STYLES */
import { HoumeWrapper, DisplayKeypadWrapper } from './components'
/* COMPONENTS */
import History from '@/components/History/History'
import { historyData } from '@/constants/fakeHistoryData'
import Display from '@/components/Display/Display'
import Keypad from '@/components/Keypad/Keypad'

const fakeDisplayValue = '123456.4343'

const Houme = ({ theme }) => {
  return (
    <HoumeWrapper theme={theme}>
      <DisplayKeypadWrapper>
        <Display value={fakeDisplayValue} />
        <Keypad />
      </DisplayKeypadWrapper>
      <History historyData={historyData} />
    </HoumeWrapper>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(Houme)
