/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { connect } from "react-redux"
/* STYLES */
import { HistoryWrapper, TitleWrapper, Title, ItemsWrapper, HistoryItemWrapper, HistoryItem, Border } from './components'
/* CONSTANTS */
import { HISTORY_TITLE } from '@/constants'

const History = props => {
  const { historyData, theme } = props

  const historyItems = historyData.map((item, i) => {
    return <HistoryItemWrapper key={i}>
      <HistoryItem theme={theme}>
        {item}
      </HistoryItem>
    </HistoryItemWrapper>
  })

  return (
    <React.Fragment>
      <Border theme={theme} />
      <HistoryWrapper>
        <TitleWrapper>
          <Title theme={theme}>
            {HISTORY_TITLE}
          </Title>
        </TitleWrapper>

        <ItemsWrapper>
          {historyItems}
        </ItemsWrapper>
      </HistoryWrapper>
    </React.Fragment>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(History)
