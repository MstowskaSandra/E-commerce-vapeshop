import * as S from "./ProductCard.styles";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reducers/cartSlice";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const image = product.Image?.[0] || {};

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product));
    toast.success("Produkt leci do koszyka", {
      duration: 2000,
      icon: "🔥",
    });
  };

  return (
    <Link to={`/products/${product.slug}`}>
      <S.ProductContainer>
        <S.ProductImage>
          <img
            src={`${import.meta.env.VITE_STRAPI_URL}${image.url}`}
            alt={product.Title}
            loading="lazy"
          />
        </S.ProductImage>
        <h3>{product.Title}</h3>
        <S.ProductInfo>
          <p>Cena: {product.Price}zł </p>
          <S.CartBtn onClick={handleAddToCart}>Do koszyka</S.CartBtn>
        </S.ProductInfo>
      </S.ProductContainer>
    </Link>
  );
};

export default ProductCard;
