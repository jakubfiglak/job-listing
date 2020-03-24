import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/mainTheme';
import StyledWrapper from './components/Wrapper';
import StyledHeader from './components/Header';
import AdsWrapper from './components/AdsWrapper';

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <StyledHeader />
      <StyledWrapper>
        <AdsWrapper />
      </StyledWrapper>
    </ThemeProvider>
  </>
);

export default App;
