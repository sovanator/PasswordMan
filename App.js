import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './Navigation/AppNavigation'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './Redux/rootReducer'
const store = createStore(rootReducer);


export default function App() {


  return (
      <Provider store={store}>
         <AppContainer />
      </Provider>
      )}