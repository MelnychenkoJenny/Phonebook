import { useAuth } from "components/hooks"
import { NavLinkStyle } from "./Navigation.styled"


export const Navigation = () => {
  const {isLoggedIn} = useAuth()
  return (
    <nav>
    <ul>
      <li>
        <NavLinkStyle to="/" end>
         Головна
        </NavLinkStyle>
      </li>
{isLoggedIn && (<li>
        <NavLinkStyle to="/contacts">Мої контакти</NavLinkStyle>
      </li>)}
      
    </ul>
  </nav>
  )
}

