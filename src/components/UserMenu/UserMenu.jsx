import { useAuth } from 'components/hooks';
import { GiExitDoor } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/operationsAuth';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
const handleLogOut = () => dispatch(logOut())
  return (
    <div>
      <p>Вітаємо, {user.name}</p>
      <button type="button" onClick = {handleLogOut}>
        Вихід
        <GiExitDoor />
      </button>
    </div>
  );
};
