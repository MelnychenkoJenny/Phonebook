import { Container } from 'components/App/App.styled';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes` from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }`;

export const ContainerRegisterPage = styled(Container)`
  animation: ${slideIn} 0.35s ease-out forwards;
  transform: translateY(100%);
  // min-height: calc(100vh - 200px);
`;

