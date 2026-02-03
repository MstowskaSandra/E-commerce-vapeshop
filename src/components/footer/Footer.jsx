import * as S from './Footer.styles';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => (
    <S.Footer>
        <S.FooterContainer>
         

                <S.FooterItems>
                    <p>Kontakt</p>
                    <p>Home</p>
                    <p>Sklepy</p>
                </S.FooterItems>
                <p>&copy; 2026 Sandra Mstowska. Wszelkie prawa zastrzeżone.</p>
                <S.MediaIcons>
                    <p>Dołącz do nas</p>
                    <S.Icons>
                        <Facebook size={24} />
                        <Instagram size={24} />
                    </S.Icons>
                </S.MediaIcons>
            
        </S.FooterContainer>
    </S.Footer>
);

export default Footer;