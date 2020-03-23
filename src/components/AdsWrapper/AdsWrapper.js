import React, { Component } from 'react';
import styled from 'styled-components';
import { data } from '../../data/data';
import JobAd from '../JobAd/JobAd';

const StyledAdsWrapper = styled.div`
  padding: 7.6rem 0;

  @media screen and (max-width: 768px) {
    padding: 5.6rem 0;
  }
`

class AdsWrapper extends Component {
  state = {
    ads: [...data],
    filter: []
  }

  handleTagClick = (e) => {
    const filterString = e.target.innerHTML;
    this.setState(prevState => ({
      filter: [...prevState.filter, filterString]
    }))
  }

  render() {
    const {ads} = this.state;

    return (
      <StyledAdsWrapper>
        {ads.map(ad => (
          <JobAd
            key={ad.id} 
            company={ad.company} 
            logo={ad.logo} 
            properties={ad.properties} 
            title={ad.title} 
            published={ad.published} 
            type={ad.type} 
            location={ad.location} 
            tags={ad.tags}
            handleTagClick={this.handleTagClick} 
            />
        )) }
      </StyledAdsWrapper>
    );
  }
}

export default AdsWrapper;
