import { useCategories } from '../hooks/useCategories';
import { useBrands } from '../hooks/useBrands';

const Filters = ({ filters, onChange }) => {
  const { categories, loading: catLoading } = useCategories();
  const { brands, loading: brandLoading } = useBrands();

  if (catLoading || brandLoading) return <div>Ładowanie filtrów...</div>;

  return (
    <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      
      <select 
        value={filters.categorySlug} 
        onChange={(e) => onChange(prev => ({ ...prev, categorySlug: e.target.value }))}
      >
        <option value="">Wszystkie kategorie</option>
        {categories.map(cat => (
          <option key={cat.id} value={cat.slug}>
            {cat.Name}
          </option>
        ))}
      </select>

      <select 
        value={filters.brand} 
        onChange={(e) => onChange(prev => ({ ...prev, brand: e.target.value }))}
      >
        <option value="">Wszystkie marki</option>
        {brands.map(brand => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>

      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <input type="number" placeholder="od" value={filters.minPrice} 
          onChange={(e) => onChange(prev => ({ ...prev, minPrice: e.target.value }))} 
          style={{ width: '70px', padding: '0.5rem' }} />
        <span>-</span>
        <input type="number" placeholder="do" value={filters.maxPrice} 
          onChange={(e) => onChange(prev => ({ ...prev, maxPrice: e.target.value }))} 
          style={{ width: '70px', padding: '0.5rem' }} />
        <span>zł</span>
      </div>

      <input type="text" placeholder="Szukaj..." value={filters.search} 
        onChange={(e) => onChange(prev => ({ ...prev, search: e.target.value }))}
        style={{ padding: '0.5rem', flex: 1, minWidth: '200px' }} />
    </div>
  );
};


export default Filters;