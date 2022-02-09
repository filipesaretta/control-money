import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <Dashboard />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
