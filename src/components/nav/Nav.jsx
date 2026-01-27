import { useSelector } from "react-redux";
import * as S from "./Nav.styles";
import Logo from "../../assets/logo-gosmoke.png";
import { ShoppingBag } from "lucide-react";

const Nav = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/produkty", label: "Produkty" },
    { to: "/sklepy", label: "Nasze sklepy" },
    { to: "/kontakt", label: "Kontakt" },
  ];

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
    </S.NavContainer>
  );
};

export default Nav;
