import React, { Component } from 'react';
import Wrapper from './Wrapper';
import { Provider } from 'react-redux'
import store from './store/store'


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Wrapper />
      </Provider>
    )
  }
}



export default App