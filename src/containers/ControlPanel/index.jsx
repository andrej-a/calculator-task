import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from '@/components/Header';
import Settings from '@/pages/AplicationSettings';
import Home from '@/pages/Home';
import HomeClassComponent from '@/pages/HomeClassComponent';

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
            <Header showMenu={showMenu} onSetShowMenu={onSetShowMenu} onSetShowHistory={onSetShowHistory} showHistory={showHistory} />
            <Routes>
                <Route path="/" element={<Home showHistory={showHistory} />} />
                <Route path="/homeclass" element={<HomeClassComponent showHistory={showHistory} />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </ThemeProvider>
    );
};
