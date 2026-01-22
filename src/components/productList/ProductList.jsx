import * as S from './ProductList.styles';
import { useProducts } from '../../hooks/useProducts'
import ProductCard from "../productCard/ProductCard";

const ProductList = () => {
  const { products, loading, error } = useProducts()
 

  if (loading) return <div className="loading">Ładowanie produktów...</div>
  if (error) return <div className="error">Błąd: {error.message}</div>

  return (
    <S.ProductsGrid>
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product}
        />
      ))}
    </S.ProductsGrid>
  )
}

export default ProductList

