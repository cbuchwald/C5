// eslint-disable-next-line no-use-before-define
import React from 'react'
import 'react-app-polyfill/stable'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider as StoreProvider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import { configureStore } from './state'
import { theme } from './theme'
import './index.css'

const store = configureStore()

ReactDOM.render(
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StoreProvider>
  ,
  document.getElementById('root')
)
