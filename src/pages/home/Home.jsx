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
  <div className="home">
    <section>
      <h1>GOSMOKE VAPESHOP</h1>
      <p>
        Doświadczenie którego nie da się zastąpić- łaczymy pasję, wiedzę i
        indywidualne podejście do każdego klienta
      </p>
    </section>

    <section>
      <div>
        {items.map(({ id, header, Icon }) => (
          <div key={id}>
            <Icon size={24} strokeWidth={2} />
            <span>{header}</span>
          </div>
        ))}
      </div>
    </section>

    <section>
      <div>
        {categories.map(({ id, txt, img }) => (
          <div key={id}>
            <p>{txt}</p>
            <img src={img} />
          </div>
        ))}
      </div>
    </section>
  </div>
);
export default Home;
