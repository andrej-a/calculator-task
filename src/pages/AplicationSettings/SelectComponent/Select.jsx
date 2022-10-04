/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '@/actions/actions'
import { SelectWrapper, SelectTitleBox, OptionsWrapper, Options } from './components'
import { fakeThemeData } from '@/constants'

const SelectComponent = ({ changeTheme, changeThemeValue, themeValue }) => {
  const [isOpen, setIsOpen] = useState(false)
  const onSetIsOpen = () => {
    setIsOpen(!isOpen)
  }
  const options = fakeThemeData.map(option => {
    return <Options onClick={e => {
      changeTheme(option.value)
      changeThemeValue(option.value)
      onSetIsOpen()
    }} className="options"
      key={option.id}>
      {option.value}
    </Options>

  })
  return (
    <SelectWrapper>
      <SelectTitleBox className="select-box" onClick={() => {
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

const mapStateToProps = ({ theme, themeValue }) => {
  return {
    theme, themeValue,
  }
}

export default connect(mapStateToProps, actions)(SelectComponent)
