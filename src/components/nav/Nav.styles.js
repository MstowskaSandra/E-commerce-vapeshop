import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { breakpoints } from "../../styles/breakpoints";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem 0 2rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.75rem 1rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 2rem;
  width: auto;
  max-width: 60%;
  list-style: none;
  text-decoration: none;
  outline: none;

  @media (max-width: ${breakpoints.laptop}) {
    gap: 1.5rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    gap: 0.75rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const MenuItems = styled(NavLink)`
  display: block;
  padding: 0.5rem;
  text-decoration: none !important;
  color: white !important;
  border-bottom: 3px solid transparent;
  transition: border-bottom 0.3s ease-out;

  &.active {
    border-bottom-color: #fa1db2;
    color: #fa1db2;
    font-weight: 700;
  }

  &:hover {
    border-bottom-color: #fa1db2aa;
    text-decoration: none;
    outline: none;
  }
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
    transform: scale(1.06);
    transition: all 0.3s ease;
  }

  img {
    height: 100px;
    width: auto;

    @media (max-width: ${breakpoints.tablet}) {
      height: 4.5rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
      height: 4rem;
    }
  }

  span {
    font-weight: 800;
    color: white;
    font-size: xx-large;
    letter-spacing: -0.025em;

    @media (max-width: ${breakpoints.tablet}) {
      font-weight: 700;
      font-size: x-large;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-weight: 700;
      font-size: large;
    }
  }
`;

export const CartItem = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  color: white;
  text-decoration: none;

  svg {
    stroke: white;
  }
`;

export const CartCounter = styled.span`
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 18px;
  height: 18px;
  background: #fa1db2;
  color: white;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    align-items: center;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 50%;
  background: #231b26;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
  z-index: 1000;

  @media (min-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const MobileMenuItem = styled(NavLink)`
  font-size: 1.1rem;
  color: white;
  text-decoration: none;

  &.active {
    color: #fa1db2;
    font-weight: 700;
  }
`;
