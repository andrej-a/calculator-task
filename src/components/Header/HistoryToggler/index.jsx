import PropTypes from 'prop-types'
import React from 'react'

import { HIDE_HISTORY, SHOW_HISTORY } from '@/constants'

import { ShowHistory } from './styles'

export const HistoryToggler = props => {
  const { onSetShowMenu, onSetShowHistory, showMenu, showHistory } = props
  return (
    <ShowHistory
      onClick={() => {
        onSetShowMenu(!showMenu)
        onSetShowHistory()
      }}>
      {showHistory ? HIDE_HISTORY : SHOW_HISTORY}
    </ShowHistory>
  )
}

HistoryToggler.propTypes = {
  showMenu: PropTypes.bool,
  onSetShowMenu: PropTypes.func,
  onSetShowHistory: PropTypes.func,
  showHistory: PropTypes.bool,
}
