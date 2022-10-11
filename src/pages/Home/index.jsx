import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
/* STYLES */
import { HoumeWrapper, DisplayKeypadWrapper } from './components'
/* COMPONENTS */
import History from '@/components/History/History'
import Display from '@/components/Display/Display'
import Keypad from '@/components/Keypad/Keypad'

const Houme = ({ theme, showHistory }) => {
  return (
    <HoumeWrapper theme={theme}>
      <DisplayKeypadWrapper>
        <Display />
        <Keypad />
      </DisplayKeypadWrapper>
      <History showHistory={showHistory} />
    </HoumeWrapper>
  )
}

Houme.propTypes = {
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

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(Houme)
