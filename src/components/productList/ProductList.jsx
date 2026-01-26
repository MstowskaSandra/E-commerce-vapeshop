// import * as S from './ProductList.styles';
// import { useProducts } from '../../hooks/useProducts'
// import ProductCard from "../productCard/ProductCard";

// const ProductList = () => {
//   const { products, loading, error } = useProducts()

//   if (loading) return <div className="loading">Ładowanie produktów...</div>
//   if (error) return <div className="error">Błąd: {error.message}</div>

//   return (
//     <S.ProductsGrid>
//       {products.map(product => (
//         <ProductCard
//           key={product.id}
//           product={product}
//         />
//       ))}
//     </S.ProductsGrid>
//   )
// }

// export default ProductList

import * as S from "./ProductList.styles";
import { useFilteredProducts } from "../../hooks/useFilteredProducts"; // <-- NOWY HOOK
import Filters from "../Filters"; // <-- NOWY KOMPONENT
import ProductCard from "../productCard/ProductCard";

const ProductList = () => {
  const { products, loading, error, filters, setFilters } =
    useFilteredProducts();

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
