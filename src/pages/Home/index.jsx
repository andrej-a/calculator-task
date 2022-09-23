import React from 'react'

import { HoumeWrapper } from './components'
import { History } from '@/components/History'
import { historyData } from '@/constants/fakeHistoryData'
export default () => {
  return (
    <HoumeWrapper>
      <History historyData={historyData} />
    </HoumeWrapper>
  )
}
