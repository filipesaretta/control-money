import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3.2rem;
  margin-top: -5rem;

  div {
    padding: 2rem;
    background: white;
    border-radius: 0.5rem;
    color: #363f5f;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h2 {
      font-size: 3.6rem;
      font-weight: 500;
      margin-top: 1.4rem;
    }

    &:last-child {
      background: #33cc95;
      color: #fff;
    }
  }
`;
