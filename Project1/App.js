import React from 'react'
import RootNavigation from './src/navigation/rootNavigation';
import { Provider } from 'react-redux';
import { store } from './redux/store'

const App = () => {
  
  return  (
  <Provider store={store}>
    <RootNavigation/>
  </Provider>
  )
}

export default App

