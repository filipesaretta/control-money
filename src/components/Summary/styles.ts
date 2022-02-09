import styled from 'styled-components';




export const Container = styled.div`
  display: flex;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  grid-gap: 3.2rem;


  div {
    width: 35.2rem;
    height: 13.6rem;
    background: white;
    border-radius: .5rem;
    padding-left: 3.2rem
  }
`;