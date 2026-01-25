import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  /* background-color: bisque; */
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
`;

export const Menu = styled.div`
  display: flex;
  gap: 2rem;
  width: auto;
  max-width: 60%;
  list-style: none;
  text-decoration: none;
`;

export const MenuItems = styled(NavLink)`
  display: block;
  padding: 0.5rem;
  text-decoration: none;
  color: #333;
  border-bottom: 3px solid transparent;
  transition: border-bottom 0.3s ease-out;

  &.active {
    border-bottom-color: #fa1db2;
    color: #fa1db2;
    font-weight: 700;
  }

  &:hover {
    border-bottom-color: #fa1db2aa;
  }
`;
