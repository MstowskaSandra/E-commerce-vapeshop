import { useParams, useNavigate } from "react-router-dom";
import { useSingleProduct } from "../hooks/useSingleProduct";

const ProductDetails = () => {
  const { slug, collection } = useParams();
  const navigate = useNavigate();
  const { product, loading, error } = useSingleProduct(slug, collection);

  if (loading) return <div>Ładowanie...</div>;
  if (error || !product) {
    return (
      <div>
        <h2>Produkt nie znaleziony</h2>
        <button onClick={() => navigate(-1)}>← Powrót</button>
      </div>
    );
  }

  return (
    <div className="product-details">
      <button onClick={() => navigate(-1)}>← Powrót</button>
      <h1>{product.Brand} {product.Title || product.Model}</h1>
      <img src={`${import.meta.env.VITE_STRAPI_URL}${product.Image?.[0]?.url}`} />
      <p>{product.Price} zł</p>
      <p>{product.Description}</p>
      
    </div>
  );
};

export default ProductDetails;
