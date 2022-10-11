import React from "react"
/* STYLES */
import { ErrorTitleWrapper, ErrorTitle } from "./components"
/* CONSTANTS */
import { ERROR_TITLE } from "@/constants"
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
    })
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <React.Fragment>
        <ErrorTitleWrapper>
          <ErrorTitle>{ERROR_TITLE}</ErrorTitle>
        </ErrorTitleWrapper>
        </React.Fragment>
      )
    }

    return this.props.children
  }
}
