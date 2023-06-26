import { Container } from 'components/App/App.styled';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes` from {
  transform: translateY(100%);
}
to {
  transform: translateY(0);
}`;

export const ContainerHomePage = styled(Container)`

  padding-top: 40px;
  padding-bottom: 40px;
  background-color: ${({ theme: { colors } }) => colors.bgAlfa};
min-height: calc(100lvh - 210px);
  animation: ${slideIn} 0.35s ease-out forwards;
  transform: translateY(100%);
  @media screen and (min-width: 768px) {
    width: 50%;

  }
  @media screen and (min-width: 1200px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const MainTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 34px;
  text-shadow: ${({ theme: { colors } }) => colors.textShadowDark};
  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
    font-size: 38px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 40px;
  }
`;
export const TextHomePage = styled.p`
  margin-bottom: 15px;
  font-size: 20px;
  text-align: center;
  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
    font-size: 26px;
  }
`;
export const IconBox = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;

  & > svg {
    width: 80px;
    height: 80px;
  }
  @media screen and (min-width: 1200px) {
    & > svg {
      width: 120px;
      height: 120px;
    }
  }
`;

export const LinkStyle = styled(Link)`
  display: inline-block;
  position: relative;
  font-size: inherit;
  font-weight: 600;
  transition: text-shadow 0.3s ease;
  text-shadow: rgba(130, 130, 130, 0.5) 4px 2px 3px;

  @media screen and (min-width: 1200px) {
    text-shadow: none;
  }
  &:hover {
    text-shadow: rgba(130, 130, 130, 0.5) 4px 2px 3px;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: transparent;
    transition: background-color 0.3s ease;
    background-color: #684c4c;
  }
`;
