import { Container } from './styles';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { MoneyFormat } from '../MoneyFormat';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="Entradas" />
        </header>
        <h2>{MoneyFormat(summary.deposits)}</h2>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcome} alt="Saídas" />
        </header>
        <h2>-{MoneyFormat(summary.withdraws)}</h2>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <h2>{MoneyFormat(summary.total)}</h2>
      </div>
    </Container>
  );
}
