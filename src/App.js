import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './ducks/store'
import routes from './routes'
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <HashRouter>{routes}</HashRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
