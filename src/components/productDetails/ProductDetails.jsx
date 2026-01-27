import { useNavigate } from "react-router-dom";
import { useSingleProduct } from "../../hooks/useSingleProduct";

const ProductDetails = () => {
  const navigate = useNavigate();

  const fullPath = window.location.pathname;
  const pathParts = fullPath.split("/").filter(Boolean);
  const slug = pathParts[pathParts.length - 1];

  let collection;
  if (fullPath.includes("/pods/")) {
    collection = "pods";
  } else if (fullPath.includes("/products/")) {
    collection = "products";
  } else {
    collection = "products";
  }

  const { product, loading, error } = useSingleProduct(slug, collection);

  if (loading) return <div>Ładowanie...</div>;
  if (error || !product) {
    return (
      <div>
        <h2>
          Produkt nie znaleziony ({collection}: {slug})
        </h2>
        <button onClick={() => navigate(-1)}>← Powrót</button>
      </div>
    );
  }

  const attrs = product.attributes || product;

  const imgSrc = attrs.Image?.[0]?.url
    ? `${import.meta.env.VITE_STRAPI_URL}${attrs.Image[0].url}`
    : "/placeholder.jpg";

  const title = `${attrs.Brand || ""} ${attrs.Title || attrs.Model}`;
  const hasLiquids = attrs.Volume || attrs.Strength || attrs.Flavor;
  const hasDevice = attrs.Battery || attrs.Power;

  return (
    <div className="product-details">
      <button onClick={() => navigate(-1)}>← Powrót</button>

      <img src={imgSrc} alt={title} />
      <h1>{title}</h1>
      <p className="price">Cena: {attrs.Price || "-"} zł</p>
      {attrs.Description && <p>{attrs.Description}</p>}

      {hasLiquids && (
        <div>
          <strong>Pojemność:</strong> {attrs.Volume || "-"}
          <strong>Nikotyna:</strong> {attrs.Strength || "-"}
          {attrs.Flavor && attrs.Flavor !== "no flavor" && (
            <>
              <strong>Smak:</strong> {attrs.Flavor}
            </>
          )}
        </div>
      )}

      {hasDevice && (
        <div>
          <strong>Pojemnośc baterii:</strong> {attrs.Battery || "-"}
          <strong>Zakres mocy:</strong> {attrs.Power || "-"}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
