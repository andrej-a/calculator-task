import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import Application from '@/components/App';
import GlobalStyles from '@/globalStyles';
import { store, persistor } from './redux/store';
import i18n from './settings/18n';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
            <Application />
            <GlobalStyles />
        </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

if (window.Cypress) {
    window.store = store;
}
