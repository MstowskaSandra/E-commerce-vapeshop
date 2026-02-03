import * as S from "./Filters.styles";
import { useCollectionCategories } from "../../hooks/useCollectionCategories";
import { useCollectionBrands } from "../../hooks/useCollectionBrands";

const Filters = ({ filters, onChange, collectionName = "products" }) => {
  const { categories, loading: catLoading } =
    useCollectionCategories(collectionName);
  const { brands, loading: brandLoading } = useCollectionBrands(collectionName);

  if (catLoading || brandLoading) {
    return (
      <div
        style={{
          padding: "2rem",
          textAlign: "center",
          color: "#666",
        }}
      >
        Ładowanie filtrów {collectionName}...
      </div>
    );
  }

  return (
    <S.FiltersContainer>
      <S.Select
        value={filters.categorySlug}
        onChange={(e) =>
          onChange((prev) => ({ ...prev, categorySlug: e.target.value }))
        }
      >
        <option value="">Kategorie</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.slug}>
            {cat.name || cat.Name || cat.attributes?.name || "Brak nazwy"}
          </option>
        ))}
      </S.Select>

      <S.Select
        value={filters.brand}
        onChange={(e) =>
          onChange((prev) => ({ ...prev, brand: e.target.value }))
        }
      >
        <option value="">Marki:</option>
        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </S.Select>

      <S.PriceRange>
        <S.PriceInput
          type="number"
          placeholder="cena od:"
          value={filters.minPrice}
          onChange={(e) =>
            onChange((prev) => ({ ...prev, minPrice: e.target.value }))
          }
          min="0"
        />
        <S.Separator>-</S.Separator>
        <S.PriceInput
          type="number"
          placeholder="cena do:"
          value={filters.maxPrice}
          onChange={(e) =>
            onChange((prev) => ({ ...prev, maxPrice: e.target.value }))
          }
        />
        <S.Currency>zł</S.Currency>
      </S.PriceRange>

      <S.SearchInput
        type="text"
        placeholder="Szukaj po nazwie..."
        value={filters.search}
        onChange={(e) =>
          onChange((prev) => ({ ...prev, search: e.target.value }))
        }
      />
    </S.FiltersContainer>
  );
};

export default Filters;
