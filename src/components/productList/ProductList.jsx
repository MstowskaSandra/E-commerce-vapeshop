import * as S from "./ProductList.styles";
import { useCollectionItems } from "../../hooks/useCollectionItems";
import Filters from "../Filters";
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
    <>
      <Filters filters={filters} onChange={setFilters} />

      <S.ProductsGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </S.ProductsGrid>
    </>
  );
};

export default ProductList;
