import React from 'react';

import { ERROR_TITLE } from '@/constants';

import { ErrorTitle, Wrapper } from './styles';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        if (error) {
            return {
                hasError: true
            };
        }
    }

    render() {
        const { hasError } = this.state;
        if (hasError) {
            return (
              <Wrapper>
                <ErrorTitle>{ERROR_TITLE}</ErrorTitle>
              </Wrapper>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
