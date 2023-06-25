import { NavLink } from "react-router-dom";

export const AuthNav = () => {
    return (
      <div>
        <NavLink to="/register">
          Реєстрація
        </NavLink>
        <NavLink to="/login">
          Вхід
        </NavLink>
      </div>
    );
  };
  