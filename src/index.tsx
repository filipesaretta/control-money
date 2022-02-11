import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import App from './App';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => ({
      id: 1,
      title: 'Inception',
      price: 3500,
      date: new Date(),
    }));
  },
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <Dashboard />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
