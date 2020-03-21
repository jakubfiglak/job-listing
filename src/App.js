import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/mainTheme';
import StyledWrapper from './components/Wrapper/Wrapper';
import StyledHeader from './components/Header/Header';
import JobAd from './components/JobAd/JobAd';

import photosnap from './assets/photosnap.svg';

const company = {
  company: 'Photosnap',
  logo: { photosnap },
  properties: ['New!', 'Featured'],
  title: 'Senior Frontend Developer',
  published: '1d ago',
  type: 'Full Time',
  location: 'USA only',
  tags: ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript'],
};

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <StyledHeader />
      <StyledWrapper>
        <JobAd company={company.company} logo={company.logo} properties={company.properties} title={company.title} published={company.published} type={company.type} location={company.location} tags={company.tags} />
      </StyledWrapper>
    </ThemeProvider>
  </>
);

export default App;
