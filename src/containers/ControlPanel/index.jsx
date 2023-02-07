import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { ThemeProvider } from 'styled-components';
import links from '@/constants/links';
import { size } from '@/constants/sizes';
import { STOP_SCROLL } from '@/constants';
import { switchHistory, switchMenu } from '@/redux/actions/actions';
const Header = lazy(() => import('@/components/Header'));
const Settings = lazy(() => import('@/pages/AplicationSettings'));
const HomeClassComponent = lazy(() => import('@/pages/Home/HomeClasses'));
const Home = lazy(() => import('@/pages/Home/HomeFunctional'));
import { Navigation } from '@/components/Navigation';

export const ControlPanel = () => {
    const {theme} = useSelector(state => state.theme);
    const dispatch = useDispatch();
    const { menu, showHistory} = useSelector(state => state.main)
    const [width, setWidth] = useState(0)

    const onSetWidth = () => {
        const currentWidth = document.documentElement.clientWidth;
        setWidth(currentWidth);

        if (currentWidth > parseInt(size.tablet, 10) && menu) {
            dispatch(switchMenu);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', onSetWidth);
        return () => {
            window.removeEventListener('resize', onSetWidth);
        }
    }, [])

    useEffect(() => {
        document.documentElement.style.overflow =
            (menu && width < parseInt(size.tablet, 10)) ? STOP_SCROLL : '';
    }, [menu, width])

    const components = [
        <Home />,
        <HomeClassComponent />,
        <Settings />
    ]

    const pages = links.map(({link}, index) => {
        return <Route key={link} path={link} element={components[index]} />
    })


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
