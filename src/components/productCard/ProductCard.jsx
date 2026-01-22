import { useDispatch } from "react-redux";
import { addToCart } from "../../reducers/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const attrs = product;
  const image = attrs.Image?.[0] || {};

  const handleAddToCart = () => {
    dispatch(addToCart(attrs));
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={`${import.meta.env.VITE_STRAPI_URL}${image.url}`}
          alt={attrs.Title}
          loading="lazy"
        />
      </div>
      <div className="product-info">
        <h3>{attrs.Title}</h3>
        <div className="product-price">
          <p>Cena: {attrs.Price}</p>
        </div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          🛒 Do koszyka
        </button>
      </div>
    </div>
  );
};

export default ProductCard;