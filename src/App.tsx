import React from 'react'
import {ThemeProvider} from 'styled-components'
import theme from './global/styles/theme'
import {SignIn} from './views/SignIn/SignIn'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <Home /> */}
      <SignIn />
    </ThemeProvider>
  )
}

export default App
