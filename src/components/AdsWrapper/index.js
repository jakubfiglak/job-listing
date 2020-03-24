import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import { data } from '../../data/data';
import JobAd from '../JobAd';
import FilterWrapper from '../FilterWrapper';

const StyledAdsWrapper = styled.div`
  padding: 7.6rem 0;
  min-height: calc(100vh - 150px);

  @media screen and (max-width: 768px) {
    padding: 5.6rem 0;
  }

  ${({filtered}) => (
    filtered && css`
      @media screen and (max-width: 768px) {
       padding: 11.6rem 0;
  }
    `
  )}
`;

const StyledMainWrapper = styled.main`
  position: relative;
`

class AdsWrapper extends Component {
  state = {
    ads: [...data],
    filters: []
  }

  handleTagClick = (e) => {
    const filterString = e.target.innerHTML;

    if (!this.state.filters.includes(filterString)) {
      this.setState(prevState => ({
        filters: [...prevState.filters, filterString]
      }))
    }
  };

  handleDeleteFilter = e => {
    const filterToRemove = e.target.previousSibling.innerHTML;
    
    this.setState(prevState => ({
      filters: [...prevState.filters.filter(filter => filter !== filterToRemove)]
    }))
  };

  handleClearFilters = () => this.setState({
    filters: []
  })

  render() {
    const {ads, filters} = this.state;
    const filteredAds = ads.filter(ad => {
      const tagsArr = Object.values(ad.tags).flat();
      return filters.every(filter => tagsArr.includes(filter));
    });

    return (
      <StyledMainWrapper>
        {filters.length !== 0 && <FilterWrapper filters={filters} handleDeleteFilter={this.handleDeleteFilter} handleClearFilters={this.handleClearFilters} />}
        <StyledAdsWrapper filtered={filters.length}>
          {filteredAds.map(ad => (
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
      </StyledMainWrapper>
    );
  }
}

export default AdsWrapper;
