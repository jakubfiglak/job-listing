import React from 'react';
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
`;

const StyledProperty = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: #fff;
  text-transform: uppercase;
  background: ${({ theme }) => theme.primary};
  border-radius: 12px;
  padding: 6px 8px;

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
`;

const StyledInfo = styled.span`
  color: ${({ theme }) => theme.darkgray};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const StyledTag = styled.span`
  color: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.fontSize.s};
  background: ${({ theme }) => theme.primaryTransparent};
  padding: 4px 10px;
  border-radius: 4px;
`;

const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ column }) => (
    column && css`
    flex-direction: column;
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
`;

const JobAd = ({
  company, logo, properties, title, published, type, location, tags,
}) => (
  <StyledContainer>
    <StyledLogo src={logo} />
    <StyledFlexContainer mainContent>
      <StyledFlexContainer column>
        <StyledFlexContainer>
          <StyledCompanyName>{company}</StyledCompanyName>
          {properties.map((property) => (
            <StyledProperty>{property}</StyledProperty>
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
        {tags.map((tag) => (
          <StyledTag>{tag}</StyledTag>
        ))}
      </StyledFlexContainer>
    </StyledFlexContainer>
  </StyledContainer>
);

export default JobAd;
