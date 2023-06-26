import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  background-color: ${({ theme: { colors } }) => colors.bgAlfa};
  box-shadow: 0 4px 8px rgba(59, 44, 44, 0.8), 0 0 0 1px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
  @media screen and (min-width: 1200px) {
    width: 60px;
  }
`;
