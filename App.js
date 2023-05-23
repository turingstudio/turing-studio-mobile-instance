import React from 'react'
import { SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './src/state/create_store'
const store = configureStore()
import AppContainer from './AppContainer'

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, margin: 10 }}>
        <AppContainer />
      </SafeAreaView>
    </Provider>
  )
}

export default App
