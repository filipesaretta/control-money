import { useTransactions } from "../../hooks/useTransactions";
import { MoneyFormat } from "../MoneyFormat";

import { Container } from "./styles";

export function TransactionList() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="title">{transaction.title}</td>
              <td className={transaction.type}>
                {transaction.type === "withdraw"
                  ? `- ${MoneyFormat(transaction.amount)}`
                  : MoneyFormat(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR", {}).format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
