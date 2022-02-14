import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


.react-modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.react-modal-content {
  width: 100%;
  max-width: 576px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 5rem 4.8rem;
  border-radius: 1rem;
  
  .close-button {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 1.5rem;
    top: 1.5rem;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: 0;
  }
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;

  margin: 0;
  @media (max-width: 720px) {
    font-size: 58.5939%; // 9px
  }
  scroll-behavior: smooth;
}

body {
  font-size: 1.6rem;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  height: 100%;
  position: relative;
  background: #F0F2F5;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

h1, h2, h3, bold {
  font-weight: 700;
}

button {
  border: 0;
  padding: 0.6rem 1rem;
}

button,
a {
  cursor: pointer;
}

/*
  Remove built-in form typography styles
*/

input,
button,
textarea,
select {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
}
/*
  Avoid text overflows
*/

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

/* 
  Root stacking context
*/

#root,
#__next {
  isolation: isolate;
}

`;
