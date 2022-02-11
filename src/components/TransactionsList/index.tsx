import { Container } from './styles';

export function TransactionList() {
  return (
    <Container>
      <table>
        <tr>
          <th>Título</th>
          <th>Preço</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
        <tr>
          <td className="title">Desenvolvimento</td>
          <td className="income">R$ 3.800,00</td>
          <td>Venda</td>
          <td>10/02/2022</td>
        </tr>
        <tr>
          <td>Mercado</td>
          <td className="outcome">- R$ 300,00</td>
          <td>Venda</td>
          <td>10/02/2022</td>
        </tr>
        <tr>
          <td>Desenvolvimento</td>
          <td>R$ 3.800,00</td>
          <td>Venda</td>
          <td>10/02/2022</td>
        </tr>
      </table>
    </Container>
  );
}
