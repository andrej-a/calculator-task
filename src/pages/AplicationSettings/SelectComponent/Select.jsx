/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* ACTIONS */
import * as actions from '@/actions/actions'
/* STYLES */
import { SelectWrapper, SelectTitleBox, OptionsWrapper, Options } from './components'
/* CONSTANTS */
import { fakeThemeData } from '@/constants'

const SelectComponent = ({ changeTheme, changeThemeValue, themeValue }) => {
  const [isOpen, setIsOpen] = useState(false)
  const onSetIsOpen = () => {
    setIsOpen(!isOpen)
  }
  const options = fakeThemeData.map(option => {
    return <Options data-test={option.value} onClick={e => {
      changeTheme(option.value)
      changeThemeValue(option.value)
      onSetIsOpen()
    }}
      className="options"
      key={option.id}>
      {option.value}
    </Options>

  })
  return (
    <SelectWrapper>
      <SelectTitleBox data-test="select" className="select-box"
        onClick={() => {
          onSetIsOpen()
        }}>
        <div className="triangle" />
        {themeValue}
      </SelectTitleBox>
      {isOpen && <OptionsWrapper>
        {options}
      </OptionsWrapper>}
    </SelectWrapper>
  )
}

SelectComponent.propTypes = {
  changeTheme: PropTypes.func,
  changeThemeValue: PropTypes.func,
  themeValue: PropTypes.string,
}


const mapStateToProps = ({ theme, themeValue }) => {
  return {
    theme, themeValue,
  }
}

export default connect(mapStateToProps, actions)(SelectComponent)
