import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    text-align: left;
    border-spacing: 0 0.5rem;

    th {
      color: #969cb2;
      font-weight: 400;
      padding: 1rem 2rem;
    }
    td {
      padding: 2.2rem 2rem;
      background: #fff;
      color: #969cb2;
      border-radius: 0.5rem;

      &.income {
        color: #33cc95;
      }
      &.outcome {
        color: #e52e4d;
      }
    }
    .title {
      color: #363f5f;
    }
  }
`;
