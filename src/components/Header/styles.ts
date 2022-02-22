import styled from "styled-components";

export const Container = styled.header`
  max-width: 100%;
  height: 21.2rem;
  background: #5429cc;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding-top: 3.2rem;
`;

export const Button = styled.button`
  margin-left: auto;
  max-width: 19.5rem;
  padding: 1.2rem 3.2rem;
  background-color: #6933ff;
  border-radius: 0.5rem;
  font-weight: 600;
  color: white;
  transition: filter 100ms ease-in-out;

  &:hover {
    filter: brightness(0.95);
  }
`;
