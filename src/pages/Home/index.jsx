import React from 'react'

import { HoumeWrapper } from './components'
import { History } from '@/components/History'
import { historyData } from '@/constants/fakeHistoryData'
import { Display } from '@/components/Display'
const fakeDisplayValue = '123456.4343'
export default () => {
  return (
    <HoumeWrapper>
      <Display value={fakeDisplayValue} />
      <History historyData={historyData} />
    </HoumeWrapper>
  )
}
