import { useSelector } from "react-redux";
import { useState } from "react";
import * as S from "./Nav.styles";
import Logo from "../../assets/logo-gosmoke.png";
import { ShoppingBag, MenuIcon, X } from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/produkty", label: "Produkty" },
    { to: "/sklepy", label: "Nasze sklepy" },
    { to: "/kontakt", label: "Kontakt" },
  ];
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <S.NavContainer>
      <S.LogoWrapper to="/">
        <img src={Logo} alt="GoSmoke Logo" />
        <span>GoSmoke</span>
      </S.LogoWrapper>

      <S.Menu>
        {navItems.map((item) => (
          <S.MenuItems key={item.to} to={item.to} end>
            {item.label}
          </S.MenuItems>
        ))}
        <S.CartItem to="/koszyk">
          <ShoppingBag size={24} />
          {totalQuantity > 0 && <S.CartCounter>{totalQuantity}</S.CartCounter>}
        </S.CartItem>
      </S.Menu>
      <S.MobileMenu $isOpen={isOpen}>
        {navItems.map((item) => (
          <S.MobileMenuItem
            key={item.to}
            to={item.to}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </S.MobileMenuItem>
        ))}
      </S.MobileMenu>
      <S.HamburgerButton onClick={toggleMenu}>
        {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
      </S.HamburgerButton>
    </S.NavContainer>
  );
};

export default Nav;
