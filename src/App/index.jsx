import React, { Suspense } from 'react'

import Loader from '@/components/Loader'
import { Header } from '@/components/Header'

export default () => (
  <Suspense fallback={<Loader />}>
    <Header />
  </Suspense>
)
