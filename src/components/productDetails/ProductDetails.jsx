import * as S from "./ProductDetails.styles.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../reducers/cartSlice";
import { useProductData } from "../../hooks/useProductData";
import { MoveLeft } from "lucide-react";
import toast from "react-hot-toast";

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
    toast.success("Produkt leci do koszyka", {
      duration: 2000,
      icon: "🔥",
    });
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
      <S.BackBtn onClick={() => navigate(-1)}>
        <MoveLeft size={36} strokeWidth={3} />
      </S.BackBtn>
      <S.ProductGrid>
        <S.ProductImage>
          <img src={imgSrc} alt={title} />
        </S.ProductImage>
        <S.ProductInfo>
          <h2>{title}</h2>
          <p className="price">
            <strong>Cena:</strong> {attrs.Price || "-"} zł
          </p>
          {attrs.Description && <p>{attrs.Description}</p>}

          {hasLiquids && (
            <S.InfoWrapper>
              <p>
                <strong>Pojemność:</strong> {attrs.Volume || "-"}
              </p>
              <p>
                <strong>Nikotyna:</strong> {attrs.Strength || "-"}
              </p>
              {attrs.Flavor && attrs.Flavor !== "no flavor" && (
                <p>
                  <strong>Smak:</strong> {attrs.Flavor}
                </p>
              )}
            </S.InfoWrapper>
          )}

          {hasDevice && (
            <div className="specs">
              <div>
                <strong>Kolor:</strong> {attrs.Color || "-"}
              </div>
              <div>
                <strong>Pojemność baterii:</strong> {attrs.Battery || "-"}
              </div>
              <div>
                <strong>Zakres mocy:</strong> {attrs.Power || "-"}
              </div>
            </div>
          )}

          <S.CartBtn onClick={handleAddToCart}>Do koszyka</S.CartBtn>
        </S.ProductInfo>
      </S.ProductGrid>
    </S.ProductDetails>
  );
};

export default ProductDetails;
