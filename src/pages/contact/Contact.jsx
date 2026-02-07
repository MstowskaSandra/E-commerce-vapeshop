import * as S from "./Contact.styles";
import QrInsta from "../../assets/Qr-Ig.png";
import QrFb from "../../assets/Qr-Fb.png";

const Contact = () => (
  <S.Contact>
    <S.TitleSection>
      <h1>twoje zaufane sklepy</h1>
      <p>jesteśmy dla ciebie</p>
    </S.TitleSection>

    <S.ShopsSection>
      <S.Shop>
        <h2>oława</h2>
        <p>
          <strong>Tel: </strong>691 058 637
        </p>
        <p>
          <strong>Email: </strong>vape.gosmoke@gmail.com
        </p>
        <p>
          <strong>Lokalizacja: </strong>Pl Gimnazjalny 9, Oława
        </p>
        <S.ShopTime>
          <p>Godziny otwarcia:</p>
          <p>
            <strong>Pon - Pią: </strong>10:00-19:00
          </p>
          <p>
            <strong>Sob: </strong>11:00-16:00
          </p>
        </S.ShopTime>
      </S.Shop>
      <S.Shop>
        <h2>Strzelin</h2>
        <p>
          <strong>Tel: </strong>660 863 739
        </p>
        <p>
          <strong>Email: </strong>vape.gosmoke@gmail.com
        </p>
        <p>
          <strong>Lokalizacja: </strong>Rynek 2a, 57-100 Strzelin
        </p>
        <S.ShopTime>
          <p>Godziny otwarcia:</p>
          <p>
            <strong>Pon - Pią: </strong>10:00-19:00
          </p>
          <p>
            <strong>Sob: </strong>10:00-15:00
          </p>
        </S.ShopTime>
      </S.Shop>
    </S.ShopsSection>

    <S.SocialMediaSection>
      <h2>Masz szybkie pytanie?</h2>
      <p>
        Napisz do nas na Instagramie lub Facebooku — często odpowiadamy szybciej
        niż mailowo.
      </p>

      <S.MediaWrapper>
        <S.Media>
          <p>Instagram</p>
          <img src={QrInsta}></img>
        </S.Media>

        <S.Media>
          <p>Facebook</p>
          <img src={QrFb}></img>
        </S.Media>
      </S.MediaWrapper>
    </S.SocialMediaSection>
  </S.Contact>
);

export default Contact;
