import * as Dialog from '@radix-ui/react-dialog';
import { Container, DialogContent, DialogOverlay } from './styles';

export function NewTransactionModal() {
  return (
    <Container>
      <Dialog.Root>
        <Dialog.Trigger className="button">Nova transação</Dialog.Trigger>
        <Dialog.Portal>
          <DialogOverlay />
          <DialogContent>
            <Dialog.Title>Cadastrar transação</Dialog.Title>
            <form>
              <input type="text" placeholder="Nome" />
              <input type="number" placeholder="Preço" />
              <input type="text" placeholder="Entrada" />
              <input type="text" placeholder="Saída" />
              <input type="text" placeholder="Categoria" />
              <Dialog.Close asChild>
                <button type="submit">Cadastrar</button>
              </Dialog.Close>
            </form>
          </DialogContent>
        </Dialog.Portal>
      </Dialog.Root>
    </Container>
  );
}
