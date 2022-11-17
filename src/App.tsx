import React from 'react'
import {StatusBar} from 'react-native'
import {ThemeProvider} from 'styled-components'
import {AuthProvider} from './context/Auth/Auth'
import theme from './global/styles/theme'
import {Router} from './routes/Router'

const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'#121214'} />
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default App
