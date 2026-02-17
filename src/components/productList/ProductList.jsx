import * as S from "./ProductList.styles";
import { useEffect, useState } from "react";
import { useCollectionItems } from "../../hooks/useCollectionItems";
import Filters from "../../components/filters/Filters";
import ProductCard from "../productCard/ProductCard";
import Pagination from "../pagination/Pagination";

const ProductList = () => {
  const [loading, setLoading] = useState(true);

  const {
    items: products,
    error,
    filters,
    setFilters,
    page,
    setPage,
    pagination,
  } = useCollectionItems("products");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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
      {loading ? (
        <S.ProductsGrid>
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <S.ProductSkeleton key={`skeleton-${index}`} />
            ))}
        </S.ProductsGrid>
      ) : (
        <S.ProductsGrid>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </S.ProductsGrid>
      )}

      <Pagination
        page={page}
        totalPages={pagination.pageCount}
        onPageChange={setPage}
      />
    </S.ProductsContainer>
  );
};

export default ProductList;
