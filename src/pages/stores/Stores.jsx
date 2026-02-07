import * as S from "./Stores.styles";
import Buba from "../../assets/Buba.jpeg";
import Daniel from "../../assets/DanielProfilowe.jpg";
import Kamil from "../../assets/KamilProfilowe.jpg";
import Kornela from "../../assets/KorneliaProfilowe.jpg";

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
    <S.StorySection>
      <S.StoryTxt>
        <h4>12 lat z vapem</h4>
        <h3>Od pasji do własnej marki.</h3>
        <S.ParWrapper>
          <p>
            Kilka lat pracy w branży. Setki godzin rozmów z klientami — najpierw
            u konkurencji.
          </p>
          <p>
            I jedna myśl, która wracała coraz częściej: da się to zrobić lepiej.
          </p>
          <p>
            Z czasem pojawiła się decyzja: stworzyć miejsce, w którym liczy się
            realne doradztwo, uczciwość i atmosfera, do której chce się
            wracać.{" "}
          </p>
          <p>Tak powstał nasz pierwszy vapeshop.</p>
          <p>
            Po ponad roku działania i setkach rozmów z klientami otworzyliśmy
            drugi punkt.
          </p>
          <p>
            Dziś tworzymy zgrany zespół 3 pasjonatów którzy znają się na tym, co
            sprzedają, bo sami z tego korzystają.
          </p>
        </S.ParWrapper>
        <h3>Robimy to po swojemu.</h3>
        <h3>Robimy to dobrze.</h3>
      </S.StoryTxt>
    </S.StorySection>

    <S.TeamSection>
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
  </S.Stores>
);

export default Stores;
