import React from 'react'

import { ErrorBoundary } from '@/components/ErrorBoundary'
import { ControlPanel } from '@/containers/ControlPanel'

import { ApplicationWrapper } from './styles'

export default () => (
  <ErrorBoundary>
    <ApplicationWrapper>
      <ControlPanel />
    </ApplicationWrapper>
  </ErrorBoundary>
)
