import PropTypes from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'

import { Border, DisplayWrapper, Extension, ExtensionWrapper, Value, ValueWrapper } from './styles'

const Display = () => {
  const { display, extension } = useSelector(state => state)
  return (
    <DisplayWrapper>
      <ExtensionWrapper>
        <Extension>{extension}</Extension>
      </ExtensionWrapper>
      <ValueWrapper>
        <Value data-test='display'>{display}</Value>
      </ValueWrapper>
      <Border />
    </DisplayWrapper>
  )
}

export default Display
