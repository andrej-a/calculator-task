import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { store } from '@/store'
import { changeTheme, changeThemeValue } from '@/actions/actions'
import { fakeThemeData } from '@/constants'

import { Options, OptionsWrapper, SelectTitleBox, SelectWrapper } from './styles'

const { dispatch } = store;

const SelectComponent = () => {
  const { themeValue } = useSelector((state) => state);
  const [isOpen, setIsOpen] = useState(false);

  const onSetIsOpen = () => {
    setIsOpen(!isOpen)
  };

  const options = fakeThemeData.map((data) => {
    const { id, value } = data;
    return (
      <Options
        data-test={value} onClick={() => {
          dispatch(changeTheme(value))
          dispatch(changeThemeValue(value))
          onSetIsOpen()
        }}
        className='options'
        key={id}>
        {value}
      </Options>
    )
  })

  return (
    <SelectWrapper>
      <SelectTitleBox
        data-test='select' className='select-box'
        onClick={onSetIsOpen}>
        <div className='triangle' />
        {themeValue}
      </SelectTitleBox>
      {isOpen && <OptionsWrapper>{options}</OptionsWrapper>}
    </SelectWrapper>
  )
}

export default SelectComponent;
