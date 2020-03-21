import styled from 'styled-components';
import bgheaderdesktop from '../../assets/bgheaderdesktop.svg';

const StyledHeader = styled.header`
  width: 100%;
  height: 150px;
  background: ${({ theme }) => theme.primary} url(${bgheaderdesktop});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export default StyledHeader;
