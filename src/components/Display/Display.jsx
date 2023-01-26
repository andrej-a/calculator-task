import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

/* STYLES */
import { Border, DisplayWrapper, Value, ValueWrapper } from './components'

const Display = ({ display }) => (
  <React.Fragment>
    <DisplayWrapper>
      <ValueWrapper>
        <Value data-test='display'>
          {display}
        </Value>
      </ValueWrapper>
      <Border />
    </DisplayWrapper>
  </React.Fragment>
)

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

const mapStateToProps = ({ display }) => ({
  display,
})

export default connect(mapStateToProps)(Display)
