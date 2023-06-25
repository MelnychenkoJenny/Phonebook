import { useAuth } from "components/hooks"
import { NavLink } from "react-router-dom"


export const Navigation = () => {
  const {isLoggedIn} = useAuth()
  return (
    <nav>
    <ul>
      <li>
        <NavLink to="/" end>
         Головна
        </NavLink>
      </li>
{isLoggedIn && (<li>
        <NavLink to="/contacts">Мої контакти</NavLink>
      </li>)}
      
    </ul>
  </nav>
  )
}

