import Modal from 'react-modal';
import { FormEvent, useState } from 'react';
import { Button, Container, RadioBox, SelectTypeOfTransaction } from './styles';
import close from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import { api } from '../../services/api';

interface newTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: newTransactionModalProps) {
  const [type, setType] = useState('deposit');

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();

    const data = {
      title,
      amount,
      category,
      type,
    };

    api.post('/transactions', data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" className="close-button" onClick={onRequestClose}>
        <img src={close} alt="Close modal" />
      </button>

      <h2 className="title">Cadastrar Transação</h2>
      <Container onSubmit={handleCreateNewTransaction}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Preço"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />
        <SelectTypeOfTransaction>
          <RadioBox
            isActive={type === 'deposit'}
            type="button"
            activeColor="green"
            onClick={() => setType('deposit')}
          >
            <img src={income} alt="Entradas de dinheiro" />
            <span>Income</span>
          </RadioBox>
          <RadioBox
            isActive={type === 'withdraw'}
            type="button"
            activeColor="red"
            onClick={() => setType('withdraw')}
          >
            <img src={outcome} alt="Saídas de dinheiro" />
            <span>Outcome</span>
          </RadioBox>
        </SelectTypeOfTransaction>
        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <Button type="submit" className="submit-button">
          Cadastrar
        </Button>
      </Container>
    </Modal>
  );
}
Modal.setAppElement('#root');
