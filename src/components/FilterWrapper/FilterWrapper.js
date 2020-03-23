import React from 'react';
import styled from 'styled-components';
import StyledTag from '../Tag/Tag';
import IconRemove from '../../assets/iconremove.svg';

const StyledFilterTag = styled(StyledTag)`
  margin: 0;
  border-radius: 5px 0 0 5px;
  cursor: default;

  &:hover {
    background: ${({ theme }) => theme.primaryTransparent};
    color: ${({ theme }) => theme.primary};
  }
`;

const StyledDelButton = styled.button`
  background: url(${IconRemove});
  background-color: ${({ theme }) => theme.primary};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 32px;
  height: 100%;
  border: 0;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.vdarkgray};
  }
`;

const StyledClearButton = styled.button`
  border: 0;
  background: 0;
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.darkgray};
  cursor: pointer;
  transition: all 0.2s;
  position: relative;

  &::after {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    bottom: 8px;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.primary};
    opacity: 0;
    transition: all 0.2s;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &:hover::after {
    opacity: 1;
  } 
`;

const StyledFilterEl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1.6rem 0 0;
`;

const StyledFilterWrapper = styled.div`
  display: flex;
`;

const StyledContainer = styled.div`
  display: flex;
  box-shadow: 0px 15px 20px rgba(13, 113, 130, 0.15);
  background: #fff;
  border-radius: 5px;
  width: 90%;
  max-width: 1100px;
  padding: 2rem 4rem;
  justify-content: space-between;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FilterWrapper = ({ filters, handleDeleteFilter, handleClearFilters }) => (
  <StyledContainer>
    <StyledFilterWrapper>
      {filters.length && filters.map((filter) => (
        <StyledFilterEl>
          <StyledFilterTag as="span">{filter}</StyledFilterTag>
          <StyledDelButton onClick={handleDeleteFilter} />
        </StyledFilterEl>
      ))}
    </StyledFilterWrapper>
    <StyledClearButton onClick={handleClearFilters}>Clear</StyledClearButton>
  </StyledContainer>
);

export default FilterWrapper;
