import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import App from './App';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { TransactionsProvider } from './TransactionsContext';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: {
        id: 1,
        title: 'Exemplo',
        value: 1000,
        category: 'Hello',
        type: 'deposit',
        createdAt: new Date('2021-02-12 09:00:00'),
      },
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => this.schema.all('transaction'));

    this.post('/transactions', (schema, req) => {
      const data = JSON.parse(req.requestBody);
      return schema.create('transaction', data);
    });
  },
});

ReactDOM.render(
  <TransactionsProvider>
    <GlobalStyle />
    <Header />
    <Dashboard />
    <App />
  </TransactionsProvider>,
  document.getElementById('root')
);
