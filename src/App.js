import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/mainTheme';
import StyledWrapper from './components/Wrapper/Wrapper';
import StyledHeader from './components/Header/Header';
import AdsWrapper from './components/AdsWrapper/AdsWrapper';

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
