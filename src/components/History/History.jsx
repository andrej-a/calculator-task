/* eslint-disable react/jsx-closing-tag-location */
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

/* CONSTANTS */
import { EMPTY_HISTORY_TITLE, HISTORY_TITLE } from '@/constants'

/* STYLES */
import { Border, HistoryItem, HistoryItemWrapper, HistoryWrapper, ItemsWrapper, Title, TitleWrapper } from './components'

const History = ({ history, theme, showHistory }) => {
  const historyItems = history.map((item, i) => (
    <HistoryItemWrapper key={i}>
      <HistoryItem theme={theme}>
        {item}
      </HistoryItem>
    </HistoryItemWrapper>
  ))

  return (
    <React.Fragment>
      <Border theme={theme} />
      <HistoryWrapper className={showHistory ? 'historyActive' : ''} theme={theme}>
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
  showHistory: PropTypes.bool,
}

const mapStateToProps = ({ theme, history }) => ({
  theme, history,
})

export default connect(mapStateToProps)(History)
