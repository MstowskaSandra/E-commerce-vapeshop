import { useParams, useNavigate } from "react-router-dom";
import { useSingleProduct } from "../hooks/useSingleProduct";
import { useCollectionCategories } from "../hooks/useCollectionCategories";

const ProductDetails = () => {
  const { slug, collection } = useParams();
  console.log("DEBUG:", { slug, collection });
  const navigate = useNavigate();

  const { product, loading, error } = useSingleProduct(slug, collection);
  console.log("DEBUG product:", product, "error:", error);
  const { categories: allCategories } = useCollectionCategories(collection);

  if (loading) return <div>Ładowanie...</div>;
  if (error || !product) {
    return (
      <div>
        <h2>Produkt nie znaleziony</h2>
        <button onClick={() => navigate(-1)}>← Powrót</button>
      </div>
    );
  }

  const imgSrc = `${import.meta.env.VITE_STRAPI_URL}${product.Image?.[0]?.url}`;
  const title = `${product.Brand} ${product.Title || product.Model}`;
  const hasLiquids = product.Volume || product.Strength || product.Flavor;
  const hasDevice = product.Battery || product.Power;

  return (
    <div className="product-details">
      <button onClick={() => navigate(-1)}>← Powrót</button>

      <img src={imgSrc} alt={title} />
      <h1>{title}</h1>
      <p className="price">{product.Price} zł</p>
      {product.Description && <p>{product.Description}</p>}

      {hasLiquids && (
        <div>
          <strong>Pojemność:</strong> {product.Volume}
          <br />
          <strong>Nikotyna:</strong> {product.Strength}
          <br />
          {product.Flavor !== "no flavor" && (
            <>
              <strong>Smak:</strong> {product.Flavor}
              <br />
            </>
          )}
        </div>
      )}

      {hasDevice && (
        <div>
          <strong>Bateria:</strong> {product.Battery}
          <br />
          <strong>Moc:</strong> {product.Power}
        </div>
      )}

      {(product.categories?.length || allCategories?.length) > 0 && (
        <div>
          Kategorie:{" "}
          {[...(product.categories || []), ...(allCategories || [])]
            .slice(0, 4)
            .map((cat) => cat.Name || cat.name)
            .join(", ")}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
