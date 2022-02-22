import { useState, useEffect } from "react";

import { TransactionsProvider } from "../../hooks/useTransactions";
import { GlobalStyle } from "../../styles/global";
import { Header } from "../../components/Header";
import { NewTransactionModal } from "../../components/NewTransactionModal";
import { Dashboard } from "../../components/Dashboard";
import { userStore } from "../../stores/userStore";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  const user = userStore((state: any) => state.user);

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  function handleOpenTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  useEffect(() => {
    if (!user || !user.isLogged) navigate("/login");
  }, [user]);

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
