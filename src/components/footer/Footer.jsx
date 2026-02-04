import * as S from './Footer.styles';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => (
  <S.Footer>
    <S.FooterContainer>
      <S.FooterItems>
        <S.FooterLink to="/kontakt">Kontakt</S.FooterLink>
        <S.FooterLink to="/">Home</S.FooterLink>
        <S.FooterLink to="/sklepy">Sklepy</S.FooterLink>
      </S.FooterItems>

      <S.Copyright>
        &copy; 2026 Sandra Mstowska. Wszelkie prawa zastrzeżone.
      </S.Copyright>

      <S.MediaIcons>
        <p>Dołącz do nas - </p>
        <S.Icons>
          <S.IconLink
            href="https://www.facebook.com/p/GoSmoke-OŁAWA-100094754190989/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </S.IconLink>
          <S.IconLink
            href="https://www.instagram.com/gosmoke_vapeshop/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </S.IconLink>
        </S.Icons>
      </S.MediaIcons>
    </S.FooterContainer>
  </S.Footer>
);

export default Footer;