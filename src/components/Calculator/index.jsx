import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import pages from '@/components/App/config/pages';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import links from '@/constants/links';

const Calculator = ({ theme }) => {

    return (
      <Suspense fallback={<ClipLoader color={theme.MAIN_COLOR} />}>
        <Header>
          <Navigation />
        </Header>
        <Routes>
          {links.map(({ link }, index) => {
                    return (
                      <Route
                        key={link} path={link}
                        element={pages[index]} />
                    );
                })}
        </Routes>
      </Suspense>
    );
};

export default Calculator;
