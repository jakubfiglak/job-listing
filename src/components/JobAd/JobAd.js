import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledLogo = styled.img`
  position: absolute;
  left: 40px;
  top: 50%;
  transform: translateY(-50%);
`;

const StyledCompanyName = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.primary};
  margin-right: 2rem;
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

const StyledRole = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.vdarkgray};
  margin: 0.8rem 0;
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
  }
`;

const StyledTag = styled.span`
  color: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.fontSize.s};
  background: ${({ theme }) => theme.primaryTransparent};
  padding: 4px 10px;
  border-radius: 4px;
  margin-right: 1.6rem;
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
    `
  )};

  ${({ mainContent }) => (
    mainContent && css`
      justify-content: space-between;
    `
  )
}
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
`;

const JobAd = ({
  company, logo, properties, title, published, type, location, tags,
}) => {
  const tagsArray = Object.values(tags).flat();

  return (
    <StyledContainer>
      <StyledLogo src={logo} alt={company} />
      <StyledFlexContainer mainContent>
        <StyledFlexContainer column>
          <StyledFlexContainer>
            <StyledCompanyName>{company}</StyledCompanyName>
            {properties && properties.map((property) => (
              property === 'Featured' ? <StyledProperty key={property} featured>{property}</StyledProperty> : <StyledProperty key={property}>{property}</StyledProperty>
            ))}
          </StyledFlexContainer>
          <StyledRole>{title}</StyledRole>
          <StyledFlexContainer>
            <StyledInfo>{published}</StyledInfo>
            <StyledInfo>{type}</StyledInfo>
            <StyledInfo>{location}</StyledInfo>
          </StyledFlexContainer>
        </StyledFlexContainer>
        <StyledFlexContainer>
          {tagsArray.map((tag) => (
            <StyledTag key={tag}>{tag}</StyledTag>
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
  tags: PropTypes.object.isRequired,
};

JobAd.defaultProps = {
  properties: null,
};

export default JobAd;
