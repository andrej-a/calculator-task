import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { ThemeProvider } from 'styled-components';

import Navigation from '@/components/Navigation';
import { STOP_SCROLL } from '@/constants';
import links from '@/constants/links';
import size from '@/constants/sizes';
import { switchMenu } from '@/redux/actions/actions';

const Header = lazy(() => import('@/components/Header'));
const Settings = lazy(() => import('@/pages/AplicationSettings'));
const HomeClassComponent = lazy(() => import('@/pages/Home/HomeClasses'));
const Home = lazy(() => import('@/pages/Home/HomeFunctional'));

const ControlPanel = () => {
    const {theme} = useSelector(state => state.theme);
    const dispatch = useDispatch();
    const { menu } = useSelector(state => state.main);
    const [width, setWidth] = useState(0);


    useEffect(() => {
        const onSetWidth = () => {
            const currentWidth = document.documentElement.clientWidth;
            setWidth(currentWidth);

            if (currentWidth > parseInt(size.tablet, 10) && menu) {
                dispatch(switchMenu);
            }
        };

        window.addEventListener('resize', onSetWidth);
        return () => {
            window.removeEventListener('resize', onSetWidth);
        };
    }, [dispatch, menu]);

    useEffect(() => {
        document.documentElement.style.overflow = (menu && width <= parseInt(size.tablet, 10)) ? STOP_SCROLL : '';
    }, [menu, width]);

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
