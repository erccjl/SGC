import React, { Component } from 'react';
import Layout from './components/Layout';
import './custom.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}
