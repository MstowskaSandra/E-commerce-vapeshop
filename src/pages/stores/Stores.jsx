import * as S from "./Stores.styles";
import { ArrowDown, Tally1 } from "lucide-react";
import Buba from "../../assets/Buba.jpeg";
import Daniel from "../../assets/DanielProfilowe.jpg";
import Kamil from "../../assets/KamilProfilowe.jpg";
import Kornela from "../../assets/KorneliaProfilowe.jpg";
import Photo1 from "../../assets/img1.jpeg";
import Photo2 from "../../assets/img2.jpeg";
import Photo3 from "../../assets/img3.jpeg";
import Photo4 from "../../assets/img5.jpeg";
import Photo5 from "../../assets/img10.jpeg";

const team = [
  {
    id: 1,
    name: "Daniel",
    position: "Założyciel",
    description: "Zna każdy trick, żeby Twój setup działał bez niespodzianek",
    img: Daniel,
  },
  {
    id: 2,
    name: "Kamil",
    position: "Sprzedawca",
    description: "Zawsze testuje sprzęt, zanim go poleci — na własnej skórze",
    img: Kamil,
  },
  {
    id: 3,
    name: "Kornela",
    position: "Sprzedawca",
    description:
      "Wie, który smak sprawi, że uśmiechniesz się przy pierwszym zaciągnięciu",
    img: Kornela,
  },
  {
    id: 4,
    name: "Buba",
    position: "Maskotka",
    description:
      "Szef ds. wąchania wszystkiego, zawsze gotowa na drzemkę w pracy",
    img: Buba,
  },
];

const Stores = () => (
  <S.Stores>
    <S.TeamSection>
      <h2>Nasza ekipa</h2>
      <S.Workers>
        {team.map(({ id, name, position, description, img }) => (
          <S.Worker key={id}>
            <img src={img}></img>
            <h4>{name}</h4>
            <p>{position}</p>
            <p>{description}</p>
          </S.Worker>
        ))}
      </S.Workers>
    </S.TeamSection>

    <S.StorySection>
      <S.StoryTxt>
        <h4>12 lat z vapem</h4>
        <h3>Od pasji do własnej marki.</h3>
        <S.ParWrapper>
          <p>
            Kilka lat pracy w branży. Setki godzin rozmów z klientami — najpierw
            u konkurencji.
          </p>
          <S.ArrowWrapper>
            <ArrowDown size={48} strokeWidth={2} />
          </S.ArrowWrapper>
          <p>
            I jedna myśl, która wracała coraz częściej: da się to zrobić lepiej.
          </p>
          <S.ArrowWrapper>
            <ArrowDown size={48} strokeWidth={2} />
          </S.ArrowWrapper>
          <p>
            Z czasem pojawiła się decyzja: stworzyć miejsce, w którym liczy się
            realne doradztwo, uczciwość i atmosfera, do której chce się
            wracać.{" "}
          </p>
          <S.ArrowWrapper>
            <ArrowDown size={48} strokeWidth={2} />
          </S.ArrowWrapper>
          <p>Tak powstał nasz pierwszy vapeshop.</p>
          <S.ArrowWrapper>
            <ArrowDown size={48} strokeWidth={2} />
          </S.ArrowWrapper>
          <p>
            Po ponad roku działania i setkach rozmów z klientami otworzyliśmy
            drugi punkt.
          </p>
          <S.ArrowWrapper>
            <ArrowDown size={48} strokeWidth={2} />
          </S.ArrowWrapper>
          <p>
            Dziś tworzymy zgrany zespół 3 pasjonatów którzy znają się na tym, co
            sprzedają, bo sami z tego korzystają.
          </p>
          <S.ArrowWrapper>
            <ArrowDown size={48} strokeWidth={2} />
          </S.ArrowWrapper>
        </S.ParWrapper>
        <h3>Robimy to po swojemu.</h3>
        <h3>Robimy to dobrze.</h3>
      </S.StoryTxt>
    </S.StorySection>

    <S.PhotoSection>
      <S.Group>
        <S.Photo>
          <img src={Photo2} />
        </S.Photo>
        <S.Photo>
          <img src={Photo3} />
        </S.Photo>
        <S.Photo>
          <img src={Photo1} />
        </S.Photo>
        <S.Photo>
          <img src={Photo4} />
        </S.Photo>
        <S.Photo>
          <img src={Photo5} />
        </S.Photo>
      </S.Group>
    </S.PhotoSection>
  </S.Stores>
);

export default Stores;
