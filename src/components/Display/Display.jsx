import React from 'react'
import { connect } from "react-redux"
import { DisplayWrapper, ValueWrapper, Value, Border } from './components'
const Display = props => {
  const { display, theme } = props
  return (
    <React.Fragment>
      <DisplayWrapper>
        <ValueWrapper>
          <Value theme={theme}>
            {display}
          </Value>
        </ValueWrapper>
        <Border theme={theme} />
      </DisplayWrapper>
    </React.Fragment>
  )
}
const mapStateToProps = ({ theme, display }) => {
  return {
    theme, display,
  }
}

export default connect(mapStateToProps)(Display)
