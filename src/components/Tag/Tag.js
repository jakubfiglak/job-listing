import styled from 'styled-components';

const StyledTag = styled.button`
  border: 0;
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.fontSize.s};
  background: ${({ theme }) => theme.primaryTransparent};
  padding: 0.8rem 1rem;
  border-radius: 4px;
  margin: 0.5rem 1.6rem 0.5rem 0;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: #fff;
  }
`;

export default StyledTag;
