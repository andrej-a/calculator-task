import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loader from '@/components/Loader'
import Header from '@/components/Header/Header'
import Home from '@/pages/Home'
import Settings from '@/pages/AplicationSettings/Settings'
import { ApplicationWrapper } from './components'
export default () => (
  <Suspense fallback={<Loader />}>
    <ApplicationWrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </ApplicationWrapper>
  </Suspense>
)
