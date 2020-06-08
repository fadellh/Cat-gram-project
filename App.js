import React from 'react';
import {
  Text,
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import reducer from './src/Redux/Reducer';
import MainNavigation from './src/Navigation/MainNavigation'

const store = createStore(reducer, {}, applyMiddleware(Thunk));

const App = () => {
  return (
    <Provider store={store}>
        <MainNavigation/>
    </Provider>
  );
};



export default App;
