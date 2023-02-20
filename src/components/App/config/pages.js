import React, { lazy } from 'react';

const Settings = lazy(() => import('@/pages/AplicationSettings'));
const HomeClassComponent = lazy(() => import('@/pages/Home/HomeClasses'));
const Home = lazy(() => import('@/pages/Home/HomeFunctional'));

const pages = [
    <Home />,
    <HomeClassComponent />,
    <Settings />
  ];

  export default pages;
