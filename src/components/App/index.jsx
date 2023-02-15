import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import ControlPanel from '@/containers/ControlPanel';

import ApplicationWrapper from './styles';

const Application = () => {
    const { theme } = useSelector(state => {
        console.log(state);
        return state.theme;
    });
    return (
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <ApplicationWrapper>
            <ControlPanel theme={theme} />
          </ApplicationWrapper>
        </ThemeProvider>
      </ErrorBoundary>
    );
};

export default Application;
