import React from 'react'
import { DisplayWrapper, ValueWrapper, Value, Border } from './components'
export const Display = props => {
  const { value } = props
  return (
    <React.Fragment>
      <DisplayWrapper>
        <ValueWrapper>
          <Value>
            {value}
          </Value>
        </ValueWrapper>
        <Border />
      </DisplayWrapper>
    </React.Fragment>
  )
}
