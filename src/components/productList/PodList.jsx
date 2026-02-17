import * as S from "./ProductList.styles";
import { useEffect, useState } from "react";
import { useCollectionItems } from "../../hooks/useCollectionItems";
import Filters from "../filters/Filters";
import PodCard from "../../components/productCard/PodCard";
import Pagination from "../pagination/Pagination";

const PodList = () => {
  const [loading, setLoading] = useState(true);
  const {
    items: pods,
    error,
    filters,
    setFilters,
    page,
    setPage,
    pagination,
  } = useCollectionItems("pods");

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

  if (error) return <div>Błąd: {error.message}</div>;

  return (
    <S.ProductsContainer>
      <Filters
        filters={filters}
        onChange={(newFilters) => {
          setFilters(newFilters);
          setPage(1);
        }}
        collectionName="pods"
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
          {pods.map((pod) => (
            <PodCard key={pod.id} pod={pod} />
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

export default PodList;
