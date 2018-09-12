import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store from './store/configureStore';
import './common.css';

import AppLayout from './components/AppLayout/AppLayout';
import Calculator from './components/Caclulator';
import СurrenciesTable from './components/СurrenciesTable';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppLayout}>
        <IndexRoute component={Calculator} />
        <Route path="calculator" component={Calculator} />
        <Route path="table" component={СurrenciesTable} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
