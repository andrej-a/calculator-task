/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types'

/* STYLES */
import { Wrapper, Key } from './components'
/* CONSTANTS */
import { buttonsObject } from '@/constants'
/* UTILS */
import { controller } from '@/utils/controller'

const Keypad = ({ theme, display }) => {
  const keypad = buttonsObject.map(button => {
    return <Key onClick={() => { controller(button, display) }} key={button.value}
      theme={theme}> {button.value}
    </Key>
  })
  return (
    <Wrapper>
      {keypad}
    </Wrapper>
  )
}

Keypad.propTypes = {
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

export default connect(mapStateToProps)(Keypad)
