import { useAuth } from 'components/hooks';
import { GiExitDoor } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/operationsAuth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ButtonExit, UserMenuContainer, WelcomeText } from './UserMenu.styled';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const handleLogOut = () =>
    dispatch(logOut())
      .unwrap()
      .then(() => toast.success(`Бувай. Гарного дня.`))
      .catch(() => toast.error('Упс. Сталась помилка... 🙄'));

  return (
    <UserMenuContainer>
      <WelcomeText>Вітаємо, {user.name}</WelcomeText>
      <ButtonExit type="button" onClick={handleLogOut}>
        Вихід
        <GiExitDoor />
      </ButtonExit>
    </UserMenuContainer>
  );
};
