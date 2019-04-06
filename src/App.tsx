import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { config } from './redux/config';

import Initial from './containers/Initial';
import Loading from './components/common/Loading';

const { store, persistor } = config;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <Initial />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
