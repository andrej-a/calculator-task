/* eslint-disable react/jsx-closing-tag-location */
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { connect } from 'react-redux'

/* ACTIONS */
import * as actions from '@/actions/actions'
/* CONSTANTS */
import { fakeThemeData } from '@/constants'

/* STYLES */
import { Options, OptionsWrapper, SelectTitleBox, SelectWrapper } from './components'

const SelectComponent = ({ changeTheme, changeThemeValue, themeValue }) => {
  const [isOpen, setIsOpen] = useState(false)
  const onSetIsOpen = () => {
    setIsOpen(!isOpen)
  }
  const options = fakeThemeData.map(option => (
    <Options
      data-test={option.value} onClick={e => {
        changeTheme(option.value)
        changeThemeValue(option.value)
        onSetIsOpen()
      }}
      className='options'
      key={option.id}>
      {option.value}
    </Options>
  ))
  return (
    <SelectWrapper>
      <SelectTitleBox
        data-test='select' className='select-box'
        onClick={() => {
          onSetIsOpen()
        }}>
        <div className='triangle' />
        {themeValue}
      </SelectTitleBox>
      {isOpen && (
        <OptionsWrapper>
          {options}
        </OptionsWrapper>
      )}
    </SelectWrapper>
  )
}

SelectComponent.propTypes = {
  changeTheme: PropTypes.func,
  changeThemeValue: PropTypes.func,
  themeValue: PropTypes.string,
}

const mapStateToProps = ({ theme, themeValue }) => ({
  theme, themeValue,
})

export default connect(mapStateToProps, actions)(SelectComponent)
