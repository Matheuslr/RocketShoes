import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './config/reactotronConfig';

import Header from './components/Header';
import GlobalStyle from './styles/global';
import Routes from './routes';
import store from './store/index';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <GlobalStyle />
                <Routes />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
