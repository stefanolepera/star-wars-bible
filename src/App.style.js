import styled, { createGlobalStyle }  from 'styled-components';

export const MainWrapper = styled.div`
    text-align: center;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    background: url(images/swb-bg.jpg) no-repeat center center fixed; 
    background-size: cover;
  }
`