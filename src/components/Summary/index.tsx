import { useContext } from 'react';
import { Container } from './styles';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

export function Summary() {
  const transactions = useContext(TransactionsContext);
  console.log(transactions);
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="Entradas" />
        </header>
        <h2>R$ 33.500,00</h2>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcome} alt="Saídas" />
        </header>
        <h2>R$ -3.500,00</h2>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <h2>R$ 30.000,00</h2>
      </div>
    </Container>
  );
}
