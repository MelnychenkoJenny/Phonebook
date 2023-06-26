import styled from 'styled-components';


export const FooterStyle = styled.footer`

padding: 15px;
display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
background-color: ${({ theme: { colors } }) => colors.bgAlfa};
@media screen and (min-width: 768px) {
    width: 50%;

  }
  @media screen and (min-width: 1200px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`
