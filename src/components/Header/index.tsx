import { Container, Content } from './styles';

import logo from '../../assets/logo.svg';


export function Header() {
  return (

    <Container>
      <Content>

        <img src={logo} alt="Logo - DT Money" />

        <button className='button'>
          Nova transação
        </button>

      </Content>
    </Container>

  )

}