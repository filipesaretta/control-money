import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../services/api';

interface TransactionsProps {
  id: number;
  title: string;
  amount: number;
  category: string;
  createdAt: string;
  type: string;
}

type TransactionsInput = Omit<TransactionsProps, 'id' | 'createdAt'>;

interface TransactionsContextData {
  transactions: TransactionsProps[];
  createTransaction: (transaction: TransactionsInput) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  useEffect(() => {
    api
      .get('/transactions')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionsInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}
