import * as S from "./ProductList.styles";
import { useCollectionItems } from "../../hooks/useCollectionItems";
import Filters from "../filters/Filters";
import PodCard from "../../components/productCard/PodCard";
import Pagination from "../pagination/Pagination";

const PodList = () => {
  const {
    items: pods,
    loading,
    error,
    filters,
    setFilters,
    page,
    setPage,
    pagination,
  } = useCollectionItems("pods");

  if (loading) return <div>Ładowanie urządzeń...</div>;
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
      <S.ProductsGrid>
        {pods.map((pod) => (
          <PodCard key={pod.id} pod={pod} />
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

export default PodList;
