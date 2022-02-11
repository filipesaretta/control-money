import { useEffect } from 'react';
import { Container, Content } from './styles';

import logo from '../../assets/logo.svg';
import { api } from '../../services/api';
import { NewTransactionModal } from '../NewTransactionModal';

export function Header() {
  useEffect(() => {
    api('/transactions').then((resp) => {
      console.log(resp.data);
    });
  }, []);

  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo - DT Money" />

        <NewTransactionModal />
      </Content>
    </Container>
  );
}
