import { Container } from 'components/App/App.styled';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes` from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }`;

export const ContainerContactsPage = styled(Container)`
  animation: ${slideIn} 0.35s ease-out forwards;
  padding-bottom: 100px;
  transform: translateY(100%);
`;
