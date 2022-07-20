import React from 'react'
import { Provider } from 'react-redux';
import Todo from '../Todo/Todo';
import store from '../../store/store'

import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App