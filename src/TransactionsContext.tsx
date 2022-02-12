import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface propTransactions {
  id: number;
  title: string;
  value: number;
  category: string;
  createdAt: string;
  type: string;
}

interface propTransactionsProvider {
  children: ReactNode;
}

export const TransactionsContext = createContext<propTransactions[]>([]);

export function TransactionsProvider({ children }: propTransactionsProvider) {
  const [transactions, setTransactions] = useState<propTransactions[]>([]);

  useEffect(() => {
    api
      .get('transactions')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}
