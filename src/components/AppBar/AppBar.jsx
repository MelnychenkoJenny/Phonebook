import iconLogo from 'components/images/iconsTelephone-64.png'
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'components/hooks';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Link } from 'react-router-dom';
import { HeaderContainer, Logo } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderContainer>
      <Link to="/" end>
      <Logo src={iconLogo} alt="Logo" width='50'/>
        </Link>
     
        <Navigation />

        {isLoggedIn ? <UserMenu /> : <AuthNav />}


    </HeaderContainer>
  );
};
