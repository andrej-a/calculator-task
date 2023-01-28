import React from 'react'
import { useSelector } from 'react-redux'

import { buttonsObject } from '@/constants'
import { controller } from '@/utils/controller'

import { Key, Wrapper } from './styles'

const Keypad = () => {
  const { display } = useSelector(state => state)

  const keypad = buttonsObject.map(button => {
    const { value } = button
    return (
      <Key
        data-test={value.trim()}
        onClick={() => {
          controller(value, display)
        }}
        key={value}>
        {value}
      </Key>
    )
  })
  return <Wrapper>{keypad}</Wrapper>
}

export default Keypad
