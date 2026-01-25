import { Link } from "react-router-dom";
import * as S from "./Nav.styles";

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
      <div>
        <Link to="/">
          <span>Vapeshop</span>
          <span>GoSmoke</span>
        </Link>
        <img></img>
      </div>

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