import React from 'react'

import { ERROR_TITLE } from '@/constants'

import { ErrorTitle, ErrorTitleWrapper } from './styles'

export class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error) {
    return {
      hasError: true,
    }
  }

  render () {
    if (this.state.hasError) {
      return (
        <ErrorTitleWrapper>
          <ErrorTitle>{ERROR_TITLE}</ErrorTitle>
        </ErrorTitleWrapper>
      )
    }

    return this.props.children
  }
}
