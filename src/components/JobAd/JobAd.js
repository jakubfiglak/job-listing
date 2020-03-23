import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import StyledTag from '../Tag/Tag';

const StyledLogo = styled.img`
  position: absolute;
  left: 40px;
  top: 50%;
  transform: translateY(-50%);

  @media screen and (max-width: 768px) {
    width: 48px;
    height: 48px;
    left: 24px;
    top: 0;
  }
`;

const StyledCompanyName = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.primary};
  margin-right: 2rem;

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const StyledProperty = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: #fff;
  text-transform: uppercase;
  background: ${({ theme }) => theme.primary};
  border-radius: 12px;
  padding: 0.6rem 0.8rem;
  margin: 0 0.8rem;

  ${({ featured }) => (
    featured && css`
      background: ${({ theme }) => theme.vdarkgray};
    `
  )}

`;

const StyledRole = styled.a`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.vdarkgray};
  text-decoration: none;
  margin: 1.2rem 0;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const StyledInfo = styled.span`
  color: ${({ theme }) => theme.darkgray};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: 3.8rem;
  position: relative;
  
  &::after {
    display: block;
    content: '';
    position: absolute;
    left: calc(100% + 17px);
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${({ theme }) => theme.darkgray}
  };

  &:last-of-type::after {
    display: none;
  };

  @media screen and (max-width: 768px) {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
`;

const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ column }) => (
    column && css`
    flex-direction: column;
    align-items: flex-start;
    position: relative;

    @media screen and (max-width: 768px) {
      margin-bottom: 3.3rem;

      &::after {
        display: block;
        content: '';
        background: ${({ theme }) => theme.darkgray};
        height: 1px;
        width: 100%;
        position: absolute;
        left: 0;
        bottom: -16.5px;
      }
    }
    `
  )};

  ${({ mainContent }) => (
    mainContent && css`
      justify-content: space-between;

      @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
      }
    `
  )};

  ${({ tags }) => (
    tags && css`
      flex-wrap: wrap;
      justify-content: flex-end;

      @media screen and (max-width: 768px) {
        justify-content: flex-start;
  }
    `
  )}
`;

const StyledContainer = styled.div`
  background: #fff;
  padding: 32px 40px 32px 152px;
  position: relative;
  box-shadow: 0px 15px 20px rgba(13, 113, 130, 0.15);
  border-radius: 5px;
  width: 90%;
  max-width: 1100px;
  margin: 0 auto 2.4rem;

  ${({ featured }) => (
    featured && css`
      &::before {
        display: block;
        content: '';
        height: 100%;
        width: 5px;
        background: ${({ theme }) => theme.primary};
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 5px 0 0 5px;
      }
    `
  )};

  @media screen and (max-width: 768px) {
    padding: 3.2rem 2.4rem;
    margin: 0 auto 4rem;
  }
`;

const JobAd = ({
  company, logo, properties, title, published, type, location, tags, handleTagClick,
}) => {
  const tagsArray = Object.values(tags).flat();
  const isFeatured = properties && properties.includes('Featured');

  return (
    <StyledContainer featured={isFeatured}>
      <StyledLogo src={logo} alt={company} />
      <StyledFlexContainer mainContent>
        <StyledFlexContainer column>
          <StyledFlexContainer>
            <StyledCompanyName>{company}</StyledCompanyName>
            {properties && properties.map((property) => (
              property === 'Featured' ? <StyledProperty key={property} featured>{property}</StyledProperty> : <StyledProperty key={property}>{property}</StyledProperty>
            ))}
          </StyledFlexContainer>
          <StyledRole href="#">{title}</StyledRole>
          <StyledFlexContainer>
            <StyledInfo>{published}</StyledInfo>
            <StyledInfo>{type}</StyledInfo>
            <StyledInfo>{location}</StyledInfo>
          </StyledFlexContainer>
        </StyledFlexContainer>
        <StyledFlexContainer tags>
          {tagsArray.map((tag) => (
            <StyledTag onClick={handleTagClick} key={tag}>{tag}</StyledTag>
          ))}
        </StyledFlexContainer>
      </StyledFlexContainer>
    </StyledContainer>
  );
};

JobAd.propTypes = {
  company: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  properties: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  published: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tags: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ])).isRequired,
};

JobAd.defaultProps = {
  properties: null,
};

export default JobAd;
