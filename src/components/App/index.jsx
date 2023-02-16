import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Calculator from '@/components/Calculator';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import themeSelector from '@/redux/selectors/themeSelector';

import ApplicationWrapper from './styles';

const Application = () => {
    const { theme } = useSelector(themeSelector);
    return (
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <ApplicationWrapper>
            <Calculator theme={theme} />
          </ApplicationWrapper>
        </ErrorBoundary>
      </ThemeProvider>
    );
};

export default Application;
