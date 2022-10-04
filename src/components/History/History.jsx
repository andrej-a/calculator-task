/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { connect } from "react-redux"
/* STYLES */
import { HistoryWrapper, TitleWrapper, Title, ItemsWrapper, HistoryItemWrapper, HistoryItem, Border } from './components'
/* CONSTANTS */
import { HISTORY_TITLE, EMPTY_HISTORY_TITLE } from '@/constants'

const History = props => {
  const { history, theme } = props

  const historyItems = history.map((item, i) => {
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
            {history.length ? HISTORY_TITLE : EMPTY_HISTORY_TITLE}
          </Title>
        </TitleWrapper>

        <ItemsWrapper>
          {historyItems}
        </ItemsWrapper>
      </HistoryWrapper>
    </React.Fragment>
  )
}

const mapStateToProps = ({ theme, history }) => {
  return {
    theme, history,
  }
}

export default connect(mapStateToProps)(History)
