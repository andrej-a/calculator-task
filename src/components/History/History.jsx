/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types'

/* STYLES */
import { HistoryWrapper, TitleWrapper, Title, ItemsWrapper, HistoryItemWrapper, HistoryItem, Border } from './components'
/* CONSTANTS */
import { HISTORY_TITLE, EMPTY_HISTORY_TITLE } from '@/constants'

const History = ({ history, theme }) => {

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

History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.string),
  theme: PropTypes.exact({
    MAIN_BACKGROUND_COLOR: PropTypes.string,
    MAIN_COLOR: PropTypes.string,
    BORDER_COLOR: PropTypes.string,
    SECOND_BORDER_COLOR: PropTypes.string,
    FONT_COLOR: PropTypes.string,
    SECOND_FONT_COLOR: PropTypes.string,
    BUTTON_BACKGROUND_COLOR: PropTypes.string,
    BUTTON_COLOR: PropTypes.string,
    CLEAR_HISTORY_BUTTON_COLOR: PropTypes.string,
  }),
}


const mapStateToProps = ({ theme, history }) => {
  return {
    theme, history,
  }
}

export default connect(mapStateToProps)(History)
