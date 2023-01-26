import React from 'react'

import { ErrorBoundary } from '@/components/ErrorBoundary'
import { ControlPanel } from '@/containers/ControlPanel/ControlPanel'

import { ApplicationWrapper } from './components'

export default () => (
  <ErrorBoundary>
    <ApplicationWrapper>
      <ControlPanel />
    </ApplicationWrapper>
  </ErrorBoundary>
)
