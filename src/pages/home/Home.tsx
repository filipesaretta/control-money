import { useState } from "react";

import { TransactionsProvider } from "../../hooks/useTransactions";
import { GlobalStyle } from "../../styles/global";
import { Header } from "../../components/Header";
import { NewTransactionModal } from "../../components/NewTransactionModal";
import { Dashboard } from "../../components/Dashboard";

export default function Home() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  function handleOpenTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionalModal={handleOpenTransactionModal} />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />
      <Dashboard />
    </TransactionsProvider>
  );
}
