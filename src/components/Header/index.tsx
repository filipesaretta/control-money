import { useCallback } from "react";
import logo from "../../assets/logo.svg";
import { userStore } from "../../stores/userStore";
import { Container, Content, Button } from "./styles";

interface HeaderProps {
  onOpenNewTransactionalModal: () => void;
}

export function Header({ onOpenNewTransactionalModal }: HeaderProps) {
  const user = userStore((state: any) => state.user);

  const onLogout = useCallback(() => {
    userStore.setState((state: any) => {
      state.user = null;
    });
  }, []);

  return (
    <Container className="p-3">
      <div
        className="d-flex justify-content-end text-white mx-auto"
        style={{ maxWidth: "1120px" }}
      >
        {user && user.name && <div>{user.name}</div>}
        <div className="btn btn-light ms-4" onClick={onLogout}>
          Logout
        </div>
      </div>
      <Content>
        <img src={logo} alt="Logo - DT Money" />
        <Button type="button" onClick={onOpenNewTransactionalModal}>
          Cadastrar
        </Button>
      </Content>
    </Container>
  );
}
