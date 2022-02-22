import { Container, Content, Button } from "./styles";
import logo from "../../assets/logo.svg";

interface HeaderProps {
  onOpenNewTransactionalModal: () => void;
}

export function Header({ onOpenNewTransactionalModal }: HeaderProps) {
  return (
    <Container className="p-3">
      <Content>
        <img src={logo} alt="Logo - DT Money" />
        <Button type="button" onClick={onOpenNewTransactionalModal}>
          Cadastrar
        </Button>
      </Content>
    </Container>
  );
}
