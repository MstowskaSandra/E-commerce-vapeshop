import * as S from "./ProductList.styles";
import { useCollectionItems } from "../../hooks/useCollectionItems";
import Filters from "../../components/filters/Filters";
import ProductCard from "../productCard/ProductCard";
import Pagination from "../pagination/Pagination";

const ProductList = () => {
  const {
    items: products,
    loading,
    error,
    filters,
    setFilters,
    page,
    setPage,
    pagination,
  } = useCollectionItems("products");

  if (loading) return <div className="loading">Ładowanie produktów...</div>;
  if (error) return <div className="error">Błąd: {error.message}</div>;

  return (
    <S.ProductsContainer>
      <Filters
        filters={filters}
        onChange={(newFilters) => {
          setFilters(newFilters);
          setPage(1);
        }}
      />

      <S.ProductsGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </S.ProductsGrid>
      <Pagination
        page={page}
        totalPages={pagination.pageCount}
        onPageChange={setPage}
      />
    </S.ProductsContainer>
  );
};

export default ProductList;
