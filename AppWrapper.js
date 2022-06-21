import React from 'react'
import { SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './src/state/create_store'
const store = configureStore()
import App from './App'

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, margin: 10 }}>
        <App />
      </SafeAreaView>
    </Provider>
  )
}

export default AppWrapper
