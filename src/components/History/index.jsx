import PropTypes from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'

import { EMPTY_HISTORY_TITLE, HISTORY_TITLE } from '@/constants'

import { Border, HistoryItem, HistoryItemWrapper, HistoryWrapper, ItemsWrapper, Title, TitleWrapper } from './styles'

const History = () => {
  const { history, showHistory } = useSelector(state => state)

  const historyItems = history.map(item => {
    const { display, id } = item
    return (
      <HistoryItemWrapper key={id}>
        <HistoryItem>{display}</HistoryItem>
      </HistoryItemWrapper>
    )
  })

  return (
    <React.Fragment>
      <Border />
      <HistoryWrapper className={showHistory ? 'historyActive' : ''}>
        <TitleWrapper>
          <Title>{history.length ? HISTORY_TITLE : EMPTY_HISTORY_TITLE}</Title>
        </TitleWrapper>

        <ItemsWrapper>{historyItems}</ItemsWrapper>
      </HistoryWrapper>
    </React.Fragment>
  )
}

export default History
