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
  const { loading, error, slug, attrs, imgSrc, title, hasLiquids, hasDevice } =
    useProductData();

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
      <S.ErrorInfo>
        <h2>Produkt ({slug}) nie znaleziony w katalogu.</h2>
        <S.CartBtn onClick={() => navigate(-1)}>Powrót</S.CartBtn>
      </S.ErrorInfo>
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
          <p>
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
            <S.InfoWrapper>
              <p>
                <strong>Kolor:</strong> {attrs.Color || "-"}
              </p>
              <p>
                <strong>Bateria:</strong> {attrs.Battery || "-"}
              </p>
              <p>
                <strong>Zakres mocy:</strong> {attrs.Power || "-"}
              </p>
            </S.InfoWrapper>
          )}

          <S.CartBtn onClick={handleAddToCart}>Do koszyka</S.CartBtn>
        </S.ProductInfo>
      </S.ProductGrid>
    </S.ProductDetails>
  );
};

export default ProductDetails;
