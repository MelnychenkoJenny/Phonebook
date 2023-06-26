import { NavLinkStyle } from 'components/Navigation/Navigation.styled';
import { AuthNavContainer } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <NavLinkStyle to="/register">Реєстрація</NavLinkStyle>
      <NavLinkStyle to="/login">Вхід</NavLinkStyle>
    </AuthNavContainer>
  );
};
