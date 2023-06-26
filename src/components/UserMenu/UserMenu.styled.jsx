import { ButtonDelete } from 'components/Contacts/Contacts.styled';
import styled, { keyframes } from 'styled-components';
const showRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const UserMenuContainer = styled.div`
  margin-left: 5px;
  padding: 10px;
  background-color: ${({ theme: { colors } }) => colors.bgAlfaDark};
  border-radius: 15px;
  animation: ${showRight} 0.35s ease-out forwards;
  @media screen and (min-width: 760px) {
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: baseline;
  }
`;
export const WelcomeText = styled.p`
  text-shadow: ${({ theme: { colors } }) => colors.textShadowDark};
  @media screen and (min-width: 760px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 22px;
  }
`;

export const ButtonExit = styled(ButtonDelete)`
  svg {
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }
`;
