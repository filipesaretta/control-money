import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

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

`