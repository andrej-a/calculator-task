import React from 'react'
import { Wrapper, Key } from './components'
import { connect } from "react-redux"

const Keypad = props => {
  const { theme } = props
  return (
    <Wrapper>
      <Key theme={theme}> C </Key>
      <Key theme={theme}> 7 </Key>
      <Key theme={theme}> 8 </Key>
      <Key theme={theme}> 9 </Key>
      <Key theme={theme}> * </Key>
      <Key theme={theme}> - </Key>
      <Key theme={theme}> 5 </Key>
      <Key theme={theme}> 4 </Key>
      <Key theme={theme}> 6 </Key>
      <Key theme={theme}> / </Key>
      <Key theme={theme}> + </Key>
      <Key theme={theme}> 1 </Key>
      <Key theme={theme}> 2 </Key>
      <Key theme={theme}> 3 </Key>
      <Key theme={theme}> = </Key>
      <Key theme={theme}> . </Key>
      <Key theme={theme}> ( </Key>
      <Key theme={theme}> 0 </Key>
      <Key theme={theme}> ) </Key>
      <Key theme={theme}> CE </Key>
    </Wrapper>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(Keypad)
