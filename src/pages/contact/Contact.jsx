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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.8531938662486!2d17.294269076434535!3d50.94492797169083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710299dabd69cb5%3A0xadf28405d75af1ff!2sGoSmoke%20O%C5%82awa!5e0!3m2!1sen!2spl!4v1770055019132!5m2!1sen!2spl"
          width="80%"
          height="300"
          style={{ border: 0, borderRadius: "20px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa Oława"
        ></iframe>
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.7343917577955!2d17.0714203!3d50.7804971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fd5fada2e23c1%3A0x9a1f870b5acb75e8!2sGoSmoke%20Strzelin!5e0!3m2!1sen!2spl!4v1770054731574!5m2!1sen!2spl"
          width="80%"
          height="300"
          style={{ border: 0, borderRadius: "20px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa Strzelin"
        ></iframe>
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
