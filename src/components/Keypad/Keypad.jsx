/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { connect } from "react-redux"

/* STYLES */
import { Wrapper, Key } from './components'
/* CONSTANTS */
import { buttonsObject } from '@/constants'
/* UTILS */
import { controller } from '@/utils/controller'
const Keypad = props => {
  const { theme, display } = props
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
const mapStateToProps = ({ theme, display }) => {
  return {
    theme, display,
  }
}

export default connect(mapStateToProps)(Keypad)
