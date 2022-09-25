import React from 'react'

import { HoumeWrapper, DisplayKeypadWrapper } from './components'
import { History } from '@/components/History'
import { historyData } from '@/constants/fakeHistoryData'
import { Display } from '@/components/Display'
import { Keypad } from '@/components/Keypad'
const fakeDisplayValue = '123456.4343'
export default () => {
  return (
    <HoumeWrapper>
      <DisplayKeypadWrapper>
        <Display value={fakeDisplayValue} />
        <Keypad />
      </DisplayKeypadWrapper>
      <History historyData={historyData} />
    </HoumeWrapper>
  )
}
