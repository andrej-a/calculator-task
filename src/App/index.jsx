import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loader from '@/components/Loader'
import { Header } from '@/components/Header'
import Home from '@/pages/Home'

export default () => (
  <Suspense fallback={<Loader />}>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Suspense>
)
