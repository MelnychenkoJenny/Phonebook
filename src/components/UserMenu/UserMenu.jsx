import { useAuth } from 'components/hooks';
import { GiExitDoor } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/operationsAuth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
const handleLogOut = () => dispatch(logOut()).unwrap()
.then(() =>
  toast.success(`Бувай. Гарного дня.`)
)
.catch(() =>
  toast.error('Упс. Сталась помилка... 🙄')
);

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
