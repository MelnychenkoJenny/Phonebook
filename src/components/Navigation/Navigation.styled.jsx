import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyle = styled(NavLink)`
display: inline-block;;
  position: relative;
  font-size: 20px;
  font-weight: 600;
  transition: transform 0.3s ease, text-shadow 0.3s ease;
  &:hover {
    transform: scale(1.1);
    text-shadow: rgba(130, 130, 130, 0.5) 4px 2px 3px;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: transparent;
    transition: background-color 0.3s ease;
  }
  &:hover::after {
    background-color: #684c4c;
  }
  &.active{
    text-shadow: rgba(130, 130, 130, 0.5) 4px 2px 3px;
    &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: transparent;
        transition: background-color 0.3s ease;
        background-color: #684c4c;
      }
  }
  @media screen and (min-width: 1200px) {
    font-size: 28px;
   }
`;
export const ListNav = styled.ul`
@media screen and (min-width: 450px) {
  display: flex;
  gap: 20px;
 }
 @media screen and (min-width: 500px) {
  display: flex;
  gap: 50px;
 }

@media screen and (min-width: 1200px) {
  gap: 100px;
 }
`