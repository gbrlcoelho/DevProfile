import React from 'react'
import {StatusBar} from 'react-native'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {ThemeProvider} from 'styled-components'
import {AuthProvider} from './context/Auth/Auth'
import theme from './global/styles/theme'
import {Router} from './routes/Router'

const App = () => {
  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <StatusBar backgroundColor='transparent' translucent />
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </ThemeProvider>
      </GestureHandlerRootView>
    </>
  )
}

export default App
