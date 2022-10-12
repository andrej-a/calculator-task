import React from 'react'
/* COMPONENTS */
import { ControlPanel } from '@/containers/ControlPanel'
import { ApplicationWrapper } from './components'
import { ErrorBoundary } from '@/components/ErrorBoundary'
export default () => (
  <ErrorBoundary>
    <ApplicationWrapper>
      <ControlPanel />
    </ApplicationWrapper>
  </ErrorBoundary>
)
