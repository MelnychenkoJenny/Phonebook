import { Container } from 'components/App/App.styled';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes` from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }`;

export const ContainerLogInPage = styled(Container)`
  animation: ${slideIn} 0.35s ease-out forwards;
  transform: translateY(100%);
  // min-height: calc(100vh - 190px);
`;

export const BtnVisiblePassword = styled.button`
  position: absolute;
  top: 55%;
  right: 6px;
  padding: 3px;
  width: 26px;
  height: 25px;
  background-color: transparent;
  color: rgb(57, 23, 23);
  border: transparent;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 300ms linear;

  &:hover {
    transform: scale(1.15);
  }

  & > svg {
    width: 17px;
    height: 17px;
  }
`;
