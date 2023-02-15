import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import Navigation from '@/components/Navigation';
import links from '@/constants/links';

const Header = lazy(() => import('@/components/Header'));
const Settings = lazy(() => import('@/pages/AplicationSettings'));
const HomeClassComponent = lazy(() => import('@/pages/Home/HomeClasses'));
const Home = lazy(() => import('@/pages/Home/HomeFunctional'));

const ControlPanel = ({ theme }) => {
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
      <Suspense fallback={<ClipLoader color={theme.MAIN_COLOR} />}>
        <Header>
          <Navigation />
        </Header>
        <Routes>
          {pages}
        </Routes>
      </Suspense>
    );
};

export default ControlPanel;
