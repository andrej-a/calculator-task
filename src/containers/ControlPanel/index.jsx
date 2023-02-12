import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { ThemeProvider } from 'styled-components';

import Navigation from '@/components/Navigation';
import links from '@/constants/links';

const Header = lazy(() => import('@/components/Header'));
const Settings = lazy(() => import('@/pages/AplicationSettings'));
const HomeClassComponent = lazy(() => import('@/pages/Home/HomeClasses'));
const Home = lazy(() => import('@/pages/Home/HomeFunctional'));

const ControlPanel = () => {
    const {theme} = useSelector(state => state.theme);

    const components = [
      <Home />,
      <HomeClassComponent />,
      <Settings />
    ];

    const pages = links.map(({link}, index) => {
        return (
          <Route
            key={link} path={link}
            element={components[index]} />
);
    });


    return (
      <ThemeProvider theme={theme}>
        <Suspense fallback={<ClipLoader color={theme.MAIN_COLOR} />}>
          <Header>
            <Navigation />
          </Header>
          <Routes>
            {pages}
          </Routes>
        </Suspense>
      </ThemeProvider>
    );
};

export default ControlPanel;
