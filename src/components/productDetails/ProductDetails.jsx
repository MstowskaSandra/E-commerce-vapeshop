import * as S from "./ProductDetails.styles.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../reducers/cartSlice";
import { useProductData } from "../../hooks/useProductData";

const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    loading,
    error,
    collection,
    slug,
    attrs,
    imgSrc,
    title,
    hasLiquids,
    hasDevice,
  } = useProductData();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...attrs,
        id: `${slug}`,
        slug,
        quantity: 1,
      }),
    );
  };

  if (loading) return <div>Ładowanie...</div>;
  if (error) {
    return (
      <div>
        <h2>
          Produkt nie znaleziony ({collection}: {slug})
        </h2>
        <button onClick={() => navigate(-1)}>← Powrót</button>
      </div>
    );
  }

  return (
    <S.ProductDetails>
      <button onClick={() => navigate(-1)}>← Powrót</button>
      <S.ProductGrid>
        <S.ProductImage>
          <img src={imgSrc} alt={title} />
        </S.ProductImage>
        <S.ProductInfo>
          <h1>{title}</h1>
          <p className="price">Cena: {attrs.Price || "-"} zł</p>
          {attrs.Description && <p>{attrs.Description}</p>}

          {hasLiquids && (
            <div className="specs">
              <div>
                <strong>Pojemność:</strong> {attrs.Volume || "-"}
              </div>
              <div>
                <strong>Nikotyna:</strong> {attrs.Strength || "-"}
              </div>
              {attrs.Flavor && attrs.Flavor !== "no flavor" && (
                <div>
                  <strong>Smak:</strong> {attrs.Flavor}
                </div>
              )}
            </div>
          )}

          {hasDevice && (
            <div className="specs">
              <div>
                <strong>Pojemność baterii:</strong> {attrs.Battery || "-"}
              </div>
              <div>
                <strong>Zakres mocy:</strong> {attrs.Power || "-"}
              </div>
            </div>
          )}

          <button onClick={handleAddToCart}>Do koszyka</button>
        </S.ProductInfo>
      </S.ProductGrid>
    </S.ProductDetails>
  );
};

export default ProductDetails;
