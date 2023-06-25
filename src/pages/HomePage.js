import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>Телефонна книга</h1>
      <p>Вітаємо на сайті.

        Цей сайт дозволяє вам зберігати та управляти своїми контактами. Щоб
        розпочати потрібно <Link to="/register">Зареєструватись</Link>, а якщо вже маєш свій
        профіль, то ось <Link to="/login">Вхід</Link>
      </p>
    </div>


  );
}
