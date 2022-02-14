import styled from 'styled-components';

export const Container = styled.form`
  display: grid;
  row-gap: 1.6rem;
  position: relative;

  .title {
    font-size: 2.4rem;
    color: #363f5f;
    margin-bottom: 3rem;
  }

  input {
    background-color: #e7e9ee;
    padding: 2rem;
    border-radius: 0.5rem;
    border: 1px solid #d7d7d7;
    &:focus {
      outline-color: #b6b6b6;
    }
  }

  .submit-button {
    color: white;
    text-transform: uppercase;
    border-radius: 0.5rem;
    font-weight: 700;
    padding: 2rem 0;
    background-color: #33cc95;
    max-width: 100%;
  }
`;

export const SelectTypeOfTransaction = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

interface PropsRadioBox {
  isActive: boolean;
  activeColor: 'green' | 'red';
}
// It's to be able to change colors base on active colors setup with styled components
const colors = {
  green: 'rgba(51, 204, 149, .5)',
  red: 'rgba(229, 46, 77, .5)',
};

export const RadioBox = styled.button<PropsRadioBox>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid #969cb2;
  border-radius: 0.5rem;
  padding: 1.3rem;
  // This is a feature of styled components
  background-color: ${(props) =>
    props.isActive ? colors[props.activeColor] : 'transparent'};
  img {
    width: 25px;
    height: 25px;
  }
  span {
    display: inline-block;
    margin-left: 1.6rem;
  }
`;

export const Button = styled.button`
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
