/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { HistoryWrapper, TitleWrapper, Title, ItemsWrapper, HistoryItemWrapper, HistoryItem } from './components'
import { HISTORY_TITLE } from '@/constants'
export const History = props => {
  const { historyData } = props

  const historyItems = historyData.map((item, i) => {
    return <HistoryItemWrapper key={i}>
      <HistoryItem>
        {item}
      </HistoryItem>
    </HistoryItemWrapper>
  })

  return (
    <HistoryWrapper>
      <TitleWrapper>
        <Title>
          {HISTORY_TITLE}
        </Title>
      </TitleWrapper>

      <ItemsWrapper>
        {historyItems}
      </ItemsWrapper>
    </HistoryWrapper>
  )
}
