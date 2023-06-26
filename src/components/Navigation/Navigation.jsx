import { useAuth } from "components/hooks"
import { ListNav, NavLinkStyle } from "./Navigation.styled"


export const Navigation = () => {
  const {isLoggedIn} = useAuth()
  return (
    <nav>
    <ListNav>
      <li>
        <NavLinkStyle to="/" end>
         Головна
        </NavLinkStyle>
      </li>
{isLoggedIn && (<li>
        <NavLinkStyle to="/contacts">Мої контакти</NavLinkStyle>
      </li>)}
      
    </ListNav>
  </nav>
  )
}

