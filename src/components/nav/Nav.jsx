import { Link, NavLink } from "react-router-dom";
import * as S from "./Nav.styles";
import Logo from "../../assets/logo-gosmoke.png";

const Nav = () => {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/produkty", label: "Produkty" },
    { to: "/sklepy", label: "Nasze sklepy" },
    { to: "/kontakt", label: "Kontakt" },
    { to: "/koszyk", label: "Koszyk" },
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
      </S.Menu>
    </S.NavContainer>
  );
};

export default Nav;
