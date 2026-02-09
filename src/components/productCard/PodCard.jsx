import * as S from "./PodCard.styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reducers/cartSlice";
import toast from "react-hot-toast";

const PodCard = ({ pod }) => {
  const dispatch = useDispatch();
  const price = pod.Price || "Brak ceny";

  const imageUrl = pod.Image?.[0]?.url
    ? `${import.meta.env.VITE_STRAPI_URL}${pod.Image[0].url}`
    : "/placeholder.jpg";

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(pod));
    toast.success(`Produkt leci do koszyka`, {
      duration: 2000,
      icon: "🔥",
    });
  };

  return (
    <Link to={`/pods/${pod.slug}`}>
      <S.ProductContainer>
        <S.ProductImage>
          <img src={imageUrl} alt={pod.Model} loading="lazy" />
        </S.ProductImage>
        <h3>{pod.Model}</h3>
        <S.ProductInfo>
          <p>Kolor: {pod.Color}</p>
          <p>Moc: {pod.Power}</p>
          <p>Bateria: {pod.Battery}</p>
          <p>
            <strong>Cena: </strong>
            {price}zł
          </p>
        </S.ProductInfo>
        <S.CartBtn onClick={handleAddToCart}>Do koszyka</S.CartBtn>
      </S.ProductContainer>
    </Link>
  );
};

export default PodCard;
