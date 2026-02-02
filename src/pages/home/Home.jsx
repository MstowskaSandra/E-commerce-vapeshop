import * as S from "./Home.styles";
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
  { id: 1, txt: "Najlepsze liquidy", img: Liquid },
  { id: 2, txt: "POD & KIT", img: Pod },
  { id: 3, txt: "Atomizery & COILS", img: Atomizer },
];

const Home = () => (
  <S.Home>
    <S.TitleSection>
      <h1>GOSMOKE VAPESHOP</h1>
      <p>
        Doświadczenie którego nie da się zastąpić- łaczymy pasję, wiedzę i
        indywidualne podejście do każdego klienta
      </p>
    </S.TitleSection>

    <S.CategoriesSection>
      <h2>PRODUKTY</h2>
      <S.CategoriesContainer>
        {categories.map(({ id, txt, img }) => (
          <S.CategorieItem key={id}>
            <p>{txt}</p>
            <img src={img} />
            <button>Zobacz</button>
          </S.CategorieItem>
        ))}
      </S.CategoriesContainer>
    </S.CategoriesSection>
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

    <S.NoSmokingSection>
      <S.Header>
        <h2>VAPE VS PAPIEROSY</h2>
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
              <p>Lepszy dla zdrowia</p>
              <p>Możemy kontrolowac ilość nikotyny</p>
            </S.ReasonTxtWrapper>
          </S.ReasonItem>
        </S.RightContent>
      </S.ContentWrapper>
    </S.NoSmokingSection>
  </S.Home>
);
export default Home;
