import * as S from "./Home.styles";
import { useNavigate, useLocation } from "react-router-dom";
import {
  HeartHandshake,
  UserStar,
  Package,
  MapPinPlus,
  HeartPlus,
  Users,
  Skull,
  Wallet,
  CigaretteOff,
  Smile,
} from "lucide-react";
import Pod from "../../assets/oxva.png";
import Liquid from "../../assets/liquid.png";
import Atomizer from "../../assets/atomizer.png";
import CentaurusKIT from "../../assets/centaurusKit.png";
import Oxva from "../../assets/oxvalogo.png";
import Sic from "../../assets/sicsaltslogo.png";
import Panda from "../../assets/pandalogo.png";
import Fantos from "../../assets/fantoslogo.png";
import Gobear from "../../assets/gobearlogo.png";
import Lostvape from "../../assets/lost-vape.png";
import Vaporesso from "../../assets/vaporessologo.png";
import Womanavape from "../../assets/kobietavape.jpg";

const items = [
  {
    id: 1,
    header: "+12 lat doświadczenia",
    txt: "Ciężko nas czymś zaskoczyć w branży",
    Icon: HeartHandshake,
  },
  {
    id: 2,
    header: "Młody zespół",
    txt: "Wiemy co się pali teraz, a nie 10lat temu",
    Icon: UserStar,
  },
  {
    id: 3,
    header: "Setki produktów",
    txt: "Najlepsze marki i sprawdzeni producenci",
    Icon: Package,
  },
  {
    id: 5,
    header: "2 sklepy",
    txt: "Oława i Strzelin, zaledwie 30min od Wrocławia",
    Icon: MapPinPlus,
  },
];

const categories = [
  { id: 1, txt: "Najlepsze liquidy", img: Liquid, nav: "/products" },
  { id: 2, txt: "POD & KIT", img: Pod, nav: "/pods" },
  { id: 3, txt: "Atomizery & COILS", img: Atomizer, nav: "/pods" },
];

const Home = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleNavCategory = (navPath) => {
    navigate(navPath);
  };
  return (
    <S.Home>
      <S.TitleSection>
        <h1>gosmoke vapeshop</h1>
        <p>
          Doświadczenie którego nie da się zastąpić- łaczymy pasję, wiedzę i
          indywidualne podejście do każdego klienta
        </p>
        <p>Sprawdź nas</p>
        <S.AnimatedArrow size={64} strokeWidth={2} />
      </S.TitleSection>

      <S.AdvantagesSection>
        <S.AdvantagesContainer>
          {items.map(({ id, header, txt, Icon }) => (
            <S.AdvantagesItem key={id}>
              <Icon size={48} strokeWidth={2} />
              <S.TxtWrapper>
                <p>{header}</p>
                <p>{txt}</p>
              </S.TxtWrapper>
            </S.AdvantagesItem>
          ))}
        </S.AdvantagesContainer>
      </S.AdvantagesSection>

      <S.AskSection>
        <S.AskContainer>
          <img src={Womanavape}></img>
          <S.AskTxt>
            <h4>Najlepsze usługi</h4>
            <h3>Zapytaj - my to ogarniemy.</h3>
            <p>
              Współpracujemy z najlepszymi markami, producentami i
              przedstawicielami, aby ciągle być na bieżąco z nowościami w
              branży.
            </p>
          </S.AskTxt>
        </S.AskContainer>
      </S.AskSection>

      <S.CategoriesSection>
        <h2>PRODUKTY</h2>
        <S.CategoriesContainer>
          {categories.map(({ id, txt, img, nav }) => (
            <S.CategorieItem key={id}>
              <h4>{txt}</h4>
              <img src={img} />
              <button onClick={() => handleNavCategory(nav)}>Zobacz</button>
            </S.CategorieItem>
          ))}
        </S.CategoriesContainer>
      </S.CategoriesSection>

      <S.NoSmokingSection>
        <S.Header>
          <h2>VAPE vs PAPIEROSY</h2>
        </S.Header>
        <S.ContentWrapper>
          <S.LeftContent>
            <S.ReasonItem>
              <Smile size={36} strokeWidth={2} />
              <S.ReasonTxtWrapper>
                <p>Zapach</p>
                <p>Koniec ze śmierdzącymi ubraniami, ciałem i otoczeniem</p>
              </S.ReasonTxtWrapper>
            </S.ReasonItem>
            <S.ReasonItem>
              <Wallet size={36} strokeWidth={2} />
              <S.ReasonTxtWrapper>
                <p>Cena</p>
                <p>Dużo niższe koszty palenia </p>
              </S.ReasonTxtWrapper>
            </S.ReasonItem>
            <S.ReasonItem>
              <CigaretteOff size={36} strokeWidth={2} />
              <S.ReasonTxtWrapper>
                <p>Redukcja uzależnienia</p>
                <p>Łatwiejsze wychodzenie z nałogu</p>
              </S.ReasonTxtWrapper>
            </S.ReasonItem>
          </S.LeftContent>

          <S.MiddleContent>
            <S.BackgroundImg>
              <img src={CentaurusKIT} />
            </S.BackgroundImg>
          </S.MiddleContent>

          <S.RightContent>
            <S.ReasonItem>
              <Skull size={36} strokeWidth={2} />
              <S.ReasonTxtWrapper>
                <p>Bezpieczeństwo</p>
                <p>95% mniej szkodliwych toksyn</p>
              </S.ReasonTxtWrapper>
            </S.ReasonItem>
            <S.ReasonItem>
              <Users size={36} strokeWidth={2} />
              <S.ReasonTxtWrapper>
                <p>Lepsze dla otoczenia</p>
                <p>Brak uciążliwego dymu- 99.9% pary to woda i gliceryna</p>
              </S.ReasonTxtWrapper>
            </S.ReasonItem>
            <S.ReasonItem>
              <HeartPlus size={36} strokeWidth={2} />
              <S.ReasonTxtWrapper>
                <p>Lepsze dla zdrowia</p>
                <p>Możemy kontrolowac ilość nikotyny</p>
              </S.ReasonTxtWrapper>
            </S.ReasonItem>
          </S.RightContent>
        </S.ContentWrapper>
      </S.NoSmokingSection>

      <S.BrandsSection>
        <S.Brands>
          <S.BrandLogo>
            <img src={Oxva} />
          </S.BrandLogo>
          <S.BrandLogo>
            <img src={Sic} />
          </S.BrandLogo>
          <S.BrandLogo>
            <img src={Panda} />
          </S.BrandLogo>
          <S.BrandLogo>
            <img src={Fantos} />
          </S.BrandLogo>
          <S.BrandLogo>
            <img src={Gobear} />
          </S.BrandLogo>
          <S.BrandLogo>
            <img src={Vaporesso} />
          </S.BrandLogo>
          <S.BrandLogo>
            <img src={Lostvape} />
          </S.BrandLogo>
        </S.Brands>
      </S.BrandsSection>

      <S.ShopSection>
        <h2>Nasze sklepy</h2>
        <S.Shop>
          <S.ShopInfo>
            <h3>Oława</h3>
            <p>Plac Gimnazjalny 9, </p>
            <p>55-200 Oława</p>
            <p>Tel: 691 058 637</p>
            <S.MapBtn>Prowadź</S.MapBtn>
          </S.ShopInfo>
          <S.ShopTime>
            <p>Godziny otwarcia:</p>
            <p>
              <strong>Pon - Pią: </strong>10:00-19:00
            </p>
            <p>
              <strong>Sob: </strong>11:00-16:00
            </p>
          </S.ShopTime>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.8531938662486!2d17.294269076434535!3d50.94492797169083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710299dabd69cb5%3A0xadf28405d75af1ff!2sGoSmoke%20O%C5%82awa!5e0!3m2!1sen!2spl!4v1770055019132!5m2!1sen!2spl"
            width="50%"
            height="400"
            style={{ border: 0, borderRadius: "20px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Oława"
          ></iframe>
        </S.Shop>
        <S.Shop>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.7343917577955!2d17.0714203!3d50.7804971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fd5fada2e23c1%3A0x9a1f870b5acb75e8!2sGoSmoke%20Strzelin!5e0!3m2!1sen!2spl!4v1770054731574!5m2!1sen!2spl"
            width="50%"
            height="400"
            style={{ border: 0, borderRadius: "20px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Strzelin"
          ></iframe>
          <S.ShopInfo>
            <h3>Strzelin</h3>
            <p>Rynek 2a, </p>
            <p>57-100 Strzelin</p>
            <p>Tel: 660 863 739</p>
            <S.MapBtn>Prowadź</S.MapBtn>
          </S.ShopInfo>
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
      </S.ShopSection>
      <S.ReviewsSection>
        <S.Reviews>
          <h4>Opinie</h4>
          <h3>Co mówią nasi klienci</h3>
          {pathname === "/" ? (
            <div data-trustmary-widget="e1ZILCI4H"></div>
          ) : null}
        </S.Reviews>
      </S.ReviewsSection>
    </S.Home>
  );
};


export default Home;
