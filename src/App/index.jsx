import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loader from '@/components/Loader'
import { Header } from '@/components/Header'
import Home from '@/pages/Home'
import { ApplicationWrapper } from './components'
export default () => (
  <Suspense fallback={<Loader />}>
    <ApplicationWrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ApplicationWrapper>
  </Suspense>
)
