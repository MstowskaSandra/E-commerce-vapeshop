import * as S from "./Home.styles";
import { Award, UserStar, Package, Brain, MapPinPlus } from "lucide-react";
import Pod from "../../assets/oxva.png";
import Liquid from "../../assets/liquid.png";
import Atomizer from "../../assets/atomizer.png";

const items = [
  { id: 1, header: "12 lat doświadczenia", Icon: Award },
  { id: 2, header: "Młody zespół", Icon: UserStar },
  { id: 3, header: "Setki produktów", Icon: Package },
  { id: 4, header: "Ogromna wiedza", Icon: Brain },
  { id: 5, header: "2 sklepy", Icon: MapPinPlus },
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

    <S.AdvantagesSection>
      <S.AdvantagesContainer>
        {items.map(({ id, header, Icon }) => (
          <S.AdvantagesItem key={id}>
            <Icon size={64} strokeWidth={2} />
            <span>{header}</span>
          </S.AdvantagesItem>
        ))}
      </S.AdvantagesContainer>
    </S.AdvantagesSection>

    <S.CategoriesSection>
      <S.CategoriesContainer>
        {categories.map(({ id, txt, img }) => (
          <S.CategoriesItem key={id}>
            <p>{txt}</p>
            <img src={img} />
          </S.CategoriesItem>
        ))}
      </S.CategoriesContainer>
    </S.CategoriesSection>
  </S.Home>
);
export default Home;
