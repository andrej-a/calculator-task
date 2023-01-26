import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

/* COMPONENTS */
import Header from '@/components/Header/Header'
import Settings from '@/pages/AplicationSettings/Settings'
import Home from '@/pages/Home'

export const ControlPanel = () => {
  const [showMenu, setShowMenu] = useState(false)
  const onSetShowMenu = value => {
    setShowMenu(value)
  }
  const [showHistory, setShowHistory] = useState(false)
  const onSetShowHistory = () => {
    setShowHistory(!showHistory)
  }

  return (
    <React.Fragment>
      <Header
        showMenu={showMenu} onSetShowMenu={onSetShowMenu}
        onSetShowHistory={onSetShowHistory} showHistory={showHistory} />
      <Routes>
        <Route path='/' element={<Home showHistory={showHistory} />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </React.Fragment>
  )
}
