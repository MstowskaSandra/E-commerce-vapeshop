import { useCollectionCategories } from "../hooks/useCollectionCategories";
import { useCollectionBrands } from "../hooks/useCollectionBrands";

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
    <div
      style={{
        marginBottom: "2rem",
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        padding: "1rem",
        background: "#f8f9fa",
        borderRadius: "8px",
      }}
    >
      <select
        value={filters.categorySlug}
        onChange={(e) =>
          onChange((prev) => ({ ...prev, categorySlug: e.target.value }))
        }
        style={{
          padding: "0.75rem",
          border: "1px solid #ddd",
          borderRadius: "4px",
          color: "#333",
        }}
      >
        <option value="">Wszystkie kategorie</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.slug}>
            {cat.name || cat.Name || cat.attributes?.name || "Brak nazwy"}
          </option>
        ))}
      </select>

      <select
        value={filters.brand}
        onChange={(e) =>
          onChange((prev) => ({ ...prev, brand: e.target.value }))
        }
        style={{
          padding: "0.75rem",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      >
        <option value="">
          Wszystkie {collectionName === "pods" ? "urządzenia" : "marki"}
        </option>
        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>

      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <input
          type="number"
          placeholder="od"
          value={filters.minPrice}
          onChange={(e) =>
            onChange((prev) => ({ ...prev, minPrice: e.target.value }))
          }
          min="0"
          style={{
            width: "70px",
            padding: "0.75rem",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        />
        <span style={{ fontWeight: "bold" }}>-</span>
        <input
          type="number"
          placeholder="do"
          value={filters.maxPrice}
          onChange={(e) =>
            onChange((prev) => ({ ...prev, maxPrice: e.target.value }))
          }
          style={{
            width: "70px",
            padding: "0.75rem",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        />
        <span style={{ fontWeight: "500", color: "#666" }}>zł</span>
      </div>

      <input
        type="text"
        placeholder="Szukaj po nazwie..."
        value={filters.search}
        onChange={(e) =>
          onChange((prev) => ({ ...prev, search: e.target.value }))
        }
        style={{
          padding: "0.75rem",
          flex: 1,
          minWidth: "200px",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      />
    </div>
  );
};

export default Filters;
