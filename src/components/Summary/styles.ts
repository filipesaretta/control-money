import styled from "styled-components";

export const Container = styled.div`
  div {
    padding: 2rem;
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
      &.withdraw {
        color: #e52e4d;
      }
    }

    &.colored {
      background: #33cc95;
      color: #fff;
    }
  }
`;
