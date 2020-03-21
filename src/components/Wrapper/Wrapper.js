import styled from 'styled-components';

const StyledWrapper = styled.div`
  min-width: 100vh;
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
`;

export default StyledWrapper;
