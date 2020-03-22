import React, { Component } from 'react';
import styled from 'styled-components';
import { data } from '../../data/data';
import JobAd from '../JobAd/JobAd';

const StyledAdsWrapper = styled.div`
  padding: 7.6rem 0;
`

class AdsWrapper extends Component {
  state = {
    ads: [...data],
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
            />
        )) }
      </StyledAdsWrapper>
    );
  }
}

export default AdsWrapper;