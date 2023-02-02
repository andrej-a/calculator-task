import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { ThemeProvider } from 'styled-components';
import links from '@/constants/links';
import { size } from '@/constants/sizes';
import { STOP_SCROLL } from '@/constants';
const Header = lazy(() => import('@/components/Header'));
const Settings = lazy(() => import('@/pages/AplicationSettings'));
const HomeClassComponent = lazy(() => import('@/pages/Home/HomeClasses'));
const Home = lazy(() => import('@/pages/Home/HomeFunctional'));

export const ControlPanel = () => {
    const theme = useSelector(state => state.theme);
    const [showMenu, setShowMenu] = useState(false);
    const [showHistory, setShowHistory] = useState(false);
    const [width, setWidth] = useState(0)

    const onSetShowMenu = () => {
        setShowMenu(!showMenu);
    };
    const onSetShowHistory = () => {
        setShowHistory(!showHistory);
    };
    const onSetWidth = () => {
        const currentWidth = document.documentElement.clientWidth;
        setWidth(currentWidth);

        if (currentWidth > parseInt(size.tablet, 10)) {
            setShowMenu(false);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', onSetWidth);
        return () => {
            window.removeEventListener('resize', onSetWidth);
        }
    }, [])

    useEffect(() => {
        document.documentElement.style.overflow = STOP_SCROLL : '';
    }, [showMenu, width])

    const components = [
        <Home showHistory={showHistory} />,
        <HomeClassComponent showHistory={showHistory} />,
        <Settings />
    ]

    const pages = links.map(({link}, index) => {
        return <Route key={link} path={link} element={components[index]} />
    })


    return (
      <ThemeProvider theme={theme}>
        <Suspense fallback={<ClipLoader color={theme.MAIN_COLOR} />}>
          <Header
            showMenu={showMenu}
            onSetShowMenu={onSetShowMenu}
            onSetShowHistory={onSetShowHistory}
            showHistory={showHistory}
                />
          <Routes>
            {pages}
          </Routes>
        </Suspense>
      </ThemeProvider>
    );
};
