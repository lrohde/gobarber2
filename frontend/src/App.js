import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
import './config/ReactotronConfig';

import history from './services/history';

import store from './store';

import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}
