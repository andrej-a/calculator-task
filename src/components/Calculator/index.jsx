import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import links from '@/constants/links';
import pages from '@/constants/pages';

const Calculator = ({ theme }) => {

    const components = links.map(({link}, index) => {
        return (
          <Route
            key={link} path={link}
            element={pages[index]} />
);
    });

    return (
      <Suspense fallback={<ClipLoader color={theme.MAIN_COLOR} />}>
        <Header>
          <Navigation />
        </Header>
        <Routes>
          {components}
        </Routes>
      </Suspense>
    );
};

export default Calculator;
