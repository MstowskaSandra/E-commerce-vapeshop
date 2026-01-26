import { useDispatch } from "react-redux";
import { addToCart } from "../../reducers/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const image = product.Image?.[0] || {};

  const handleAddToCart = (e) => {
    e.prevendDefault();
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  return (
    <Link to={`/products/${product.slug}`}>
      <div className="product-image">
        <img
          src={`${import.meta.env.VITE_STRAPI_URL}${image.url}`}
          alt={product.Title}
          loading="lazy"
        />
      </div>
      <div className="product-info">
        <h3>{product.Title}</h3>
        <div className="product-price">
          <p>Cena: {product.Price}zł </p>
        </div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          🛒 Do koszyka
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;