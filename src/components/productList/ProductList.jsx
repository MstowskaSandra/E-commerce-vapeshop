import * as S from "./ProductList.styles";
import { useCollectionItems } from "../../hooks/useCollectionItems";
import Filters from "../../components/filters/Filters";
import ProductCard from "../productCard/ProductCard";

const ProductList = () => {
  const {
    items: products,
    loading,
    error,
    filters,
    setFilters,
  } = useCollectionItems("products");

  if (loading) return <div className="loading">Ładowanie produktów...</div>;
  if (error) return <div className="error">Błąd: {error.message}</div>;

  return (
    <S.ProductsContainer>
      <Filters filters={filters} onChange={setFilters} />

      <S.ProductsGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </S.ProductsGrid>
    </S.ProductsContainer>
  );
};

export default ProductList;
