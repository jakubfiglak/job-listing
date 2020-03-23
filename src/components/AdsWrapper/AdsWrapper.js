import React, { Component } from 'react';
import styled from 'styled-components';
import { data } from '../../data/data';
import JobAd from '../JobAd/JobAd';
import FilterWrapper from '../FilterWrapper/FilterWrapper';

const StyledAdsWrapper = styled.div`
  padding: 7.6rem 0;

  @media screen and (max-width: 768px) {
    padding: 5.6rem 0;
  }
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

    return (
      <StyledMainWrapper>
        {filters.length !== 0 && <FilterWrapper filters={filters} handleDeleteFilter={this.handleDeleteFilter} handleClearFilters={this.handleClearFilters} />}
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
      </StyledMainWrapper>
    );
  }
}

export default AdsWrapper;
