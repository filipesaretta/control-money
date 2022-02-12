import * as Dialog from '@radix-ui/react-dialog';
import { FormEvent, useState } from 'react';
import close from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import { api } from '../../services/api';
import {
  Container,
  Button,
  DialogContent,
  Overlay,
  SelectTypeOfTransaction,
  RadioBox,
} from './styles';

export function NewTransactionModal() {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  function handleNewTransactionSubmit(e: FormEvent) {
    e.preventDefault();
    const data = {
      title,
      value,
      category,
      type,
    };
    api.post('/transactions', data);
  }

  return (
    <Container>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button>Nova transação</Button>
        </Dialog.Trigger>

        <Overlay>
          <DialogContent>
            <Dialog.Close className="close-button">
              <img src={close} alt="Close modal" />
            </Dialog.Close>
            <Dialog.Title className="title">Cadastrar transação</Dialog.Title>
            <form onSubmit={handleNewTransactionSubmit}>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="number"
                placeholder="Preço"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
              />
              <SelectTypeOfTransaction>
                <RadioBox
                  type="button"
                  onClick={() => {
                    setType('deposit');
                  }}
                  isActive={type === 'deposit'}
                  activeColor="green"
                >
                  <img src={income} alt="Entradas de dinheiro" />
                  <span>Income</span>
                </RadioBox>
                <RadioBox
                  type="button"
                  onClick={() => {
                    setType('withdraw');
                  }}
                  isActive={type === 'withdraw'}
                  activeColor="red"
                >
                  <img src={outcome} alt="Saídas de dinheiro" />
                  <span>Outcome</span>
                </RadioBox>
              </SelectTypeOfTransaction>
              <input
                type="text"
                placeholder="Categoria"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />

              <button type="submit" className="submit-button">
                Cadastrar
              </button>
            </form>
          </DialogContent>
        </Overlay>
      </Dialog.Root>
    </Container>
  );
}
