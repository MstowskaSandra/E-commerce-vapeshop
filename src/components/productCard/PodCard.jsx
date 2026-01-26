// const PodCard = ({ pod }) => {
//   const price = pod.Price || 'Brak ceny';
//   const image = pod.Image?.[0]?.url
//     ? `${import.meta.env.VITE_STRAPI_URL}${pod.Image[0].url}`
//     : '/placeholder.jpg';

//   return (
//     <div className="pod-card">
//       <img src={image} alt={pod.Title || 'POD'} />
//       <h3>{pod.Model}</h3>
//       <p>Moc: {pod.Power}</p>
//       <p>Bateria: {pod.Battery}</p>
//       <span className="price">Price: {price}</span>
//     </div>
//   );
// };

// export default PodCard;

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reducers/cartSlice";

const PodCard = ({ pod }) => {
  const dispatch = useDispatch();
  const price = pod.Price || "Brak ceny";

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(pod));
  };

  return (
    <Link
      to={`/pods/${pod.slug}`}
      className="pod-card"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <img
        src={`${import.meta.env.VITE_STRAPI_URL}${pod.Image[0].url}`}
        alt={pod.Model || "POD"}
        loading="lazy"
      />
      <div className="pod-info">
        <h3>
          {pod.Brand} {pod.Model}
        </h3>
        <p>Moc: {pod.Power}</p>
        <p>Bateria: {pod.Battery}</p>
        <span className="price">Cena: {price}zł</span>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          🛒 Do koszyka
        </button>
      </div>
    </Link>
  );
};

export default PodCard;
