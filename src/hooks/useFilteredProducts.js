import { useState, useEffect } from "react";

export const useFilteredProducts = () => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
        categorySlug: "",
        search: "",
        brand: "",
        minPrice: "",
        maxPrice: "",
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

const queryString = new URLSearchParams({
    populate: "*",
    ...(filters.categorySlug && { 
      "filters[categories][slug][$eq]": filters.categorySlug 
    }),
    ...(filters.search && { 
      "filters[Title][$containsi]": filters.search 
    }),
    ...(filters.brand && {
        "filters[Brand][$eq]": filters.brand
    }),
    ...(filters.minPrice && { 
      "filters[Price][$gte]": filters.minPrice 
    }),
    ...(filters.maxPrice && { 
      "filters[Price][$lte]": filters.maxPrice 
    }),
  }).toString();

  useEffect(() => {
    const controller = new AbortController();

    fetch(`${import.meta.env.VITE_STRAPI_URL}/api/products?${queryString}`, { 
      signal: controller.signal 
    })
      .then(async res => {
        const text = await res.text();
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${text.slice(0, 100)}`);
        return JSON.parse(text);
      })
      .then(({ data }) => {
        console.log('Dane z API (filtrowane):', data); 
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        if (err.name !== "AbortError") {
          console.error('BŁĄD FETCH (filtrowane):', err);
          setError(err);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [queryString]); 

  return { products, loading, error, filters, setFilters };
};
