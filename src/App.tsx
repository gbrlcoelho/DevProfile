import React from 'react'
import {ThemeProvider} from 'styled-components'
import theme from './global/styles/theme'
import {Router} from './routes/Router'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

export default App
