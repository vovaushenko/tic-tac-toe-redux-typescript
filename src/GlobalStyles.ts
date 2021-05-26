import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

 body {
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
 }

h1,
h2,
h3,
h4,
h5,
h6 {
  color:${({ theme }) => theme.mainColor};
  font-weight:600;
};

h2 {
  margin-bottom:1rem;
}


ul {
  list-style-type: none;
}
 `;
