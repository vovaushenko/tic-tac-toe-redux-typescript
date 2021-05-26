import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
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
    line-height: 1.4;
    font-size: 1rem;
    font-weight: 300;
    transition: all 0.2s ease-in-out;
 }

h1,
h2,
h3,
h4,
h5,
h6 {
  color:${({ theme }) => theme.mainColor};
  margin: 0.5rem 0;
  letter-spacing: 2px;
  font-weight:300;
}
p {
  margin-bottom: 1rem;
  letter-spacing: 1.1px;
}

ul {
  list-style-type: none;
}

a {
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  letter-spacing:1px;
  &:hover{
    color: ${({ theme }) => theme.mainColor};
  }
}

img {
  width: 100%;
  display: block;
}

input {
  &::placeholder {
    font-style:inherit;
    letter-spacing:1.1px;
  }
}

button {
  font-family:inherit;
  text-transform: capitalize;
  transition: 0.2s linear;
  font-size: inherit;
  letter-spacing: 1.1px;
  cursor: pointer;
}


::-webkit-scrollbar {
  width:5px;
  
}
::-webkit-scrollbar-track {
  background: transparent;

}
::-webkit-scrollbar-thumb {
  background:${({ theme }) => theme.mainColor};;
  border-radius:25px;
}
 `;
