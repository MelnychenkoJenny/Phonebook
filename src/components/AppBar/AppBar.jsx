import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'components/hooks';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      {/* <UserMenu /> */}
    </header>
  );
};
