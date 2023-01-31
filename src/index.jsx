import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Application from '@/components/App';
import GlobalStyles from '@/globalStyles';
import { store } from '@/redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Application />
      <GlobalStyles />
    </BrowserRouter>
  </Provider>,
    document.getElementById('root')
);

if (window.Cypress) {
    window.store = store;
}
