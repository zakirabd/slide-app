import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import store from './store';
import history from './history';
import './css/style.css';
import './css/responsive.css';

import MainPage from './main components/MainPage';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router history={history}>
        <div>
            <Switch>
                <Route to="/" exact component={MainPage} />
            </Switch>
            
        </div>
      </Router>
    </Provider>
    )
  }
}

export default App
