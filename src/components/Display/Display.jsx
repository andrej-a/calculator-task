import React from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types'
/* STYLES */
import { DisplayWrapper, ValueWrapper, Value, Border } from './components'
const Display = ({ display, theme }) => {
  return (
    <React.Fragment>
      <DisplayWrapper>
        <ValueWrapper>
          <Value theme={theme}>
            {display}
          </Value>
        </ValueWrapper>
        <Border theme={theme} />
      </DisplayWrapper>
    </React.Fragment>
  )
}

Display.propTypes = {
  display: PropTypes.string,
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

const mapStateToProps = ({ theme, display }) => {
  return {
    theme, display,
  }
}

export default connect(mapStateToProps)(Display)
