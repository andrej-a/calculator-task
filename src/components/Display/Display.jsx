import React from 'react'
import { connect } from "react-redux"
import { DisplayWrapper, ValueWrapper, Value, Border } from './components'
const Display = props => {
  const { value, theme } = props
  return (
    <React.Fragment>
      <DisplayWrapper>
        <ValueWrapper>
          <Value theme={theme}>
            {value}
          </Value>
        </ValueWrapper>
        <Border theme={theme} />
      </DisplayWrapper>
    </React.Fragment>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(Display)
