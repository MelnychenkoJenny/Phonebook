import { useAuth } from 'components/hooks';
import { GiExitDoor } from 'react-icons/gi';

export const UserMenu = () => {
const {user}=useAuth();

  return (
    <div>
      <p>Вітаємо, {user.name}</p>
      <button type='button'>
        Вихід
        <GiExitDoor />
      </button>
    </div>
  );
};
