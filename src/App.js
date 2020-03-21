import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/mainTheme';
import StyledWrapper from './components/Wrapper/Wrapper';
import StyledHeader from './components/Header/Header';

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <StyledHeader />
      <StyledWrapper>
        <h1>Hello</h1>
      </StyledWrapper>
    </ThemeProvider>
  </>
);

export default App;
