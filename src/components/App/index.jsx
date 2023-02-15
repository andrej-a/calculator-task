import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Calculator from '@/components/Calculator';
import { ErrorBoundary } from '@/components/ErrorBoundary';

import ApplicationWrapper from './styles';

const Application = () => {
    const { theme } = useSelector(state => state.theme);
    return (
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <ApplicationWrapper>
            <Calculator theme={theme} />
          </ApplicationWrapper>
        </ThemeProvider>
      </ErrorBoundary>
    );
};

export default Application;
