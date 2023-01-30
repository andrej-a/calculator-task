import React, { useState, lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

const Header = lazy(() => import('@/components/Header'));
const Settings = lazy(() => import('@/pages/AplicationSettings'));
const HomeClassComponent = lazy(() => import('@/pages/Home/HomeClasses'));
const Home = lazy(() => import('@/pages/Home/HomeFunctional'));

import ClipLoader from "react-spinners/ClipLoader";

export const ControlPanel = () => {
    const theme = useSelector((state) => state.theme);
    const [showMenu, setShowMenu] = useState(false);
    const onSetShowMenu = (value) => {
        setShowMenu(value);
    };
    const [showHistory, setShowHistory] = useState(false);
    const onSetShowHistory = () => {
        setShowHistory(!showHistory);
    };

    return (
        <ThemeProvider theme={theme}>
            <Suspense fallback={<ClipLoader color={theme.MAIN_COLOR} />}>
                <Header showMenu={showMenu} onSetShowMenu={onSetShowMenu} onSetShowHistory={onSetShowHistory} showHistory={showHistory} />
                <Routes>
                    <Route path="/" element={<Home showHistory={showHistory} />} />
                    <Route path="/homeclass" element={<HomeClassComponent showHistory={showHistory} />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </Suspense>
        </ThemeProvider>
    );
};
