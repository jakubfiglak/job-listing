import styled from 'styled-components';
import bgheaderdesktop from '../../assets/bgheaderdesktop.svg';
import bgheadermobile from '../../assets/bgheadermobile.svg';

const StyledHeader = styled.header`
  width: 100%;
  height: 150px;
  background: ${({ theme }) => theme.primary} url(${bgheaderdesktop});
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @media screen and (max-width: 768px) {
    background: ${({ theme }) => theme.primary} url(${bgheadermobile});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    }
`;

export default StyledHeader;
