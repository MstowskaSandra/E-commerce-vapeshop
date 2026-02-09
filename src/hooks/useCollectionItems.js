// import { useState, useEffect } from "react";

// export const useCollectionItems = (collectionName = "products") => {
//   const [items, setItems] = useState([]);
//   const [filters, setFilters] = useState({
//     categorySlug: "",
//     search: "",
//     brand: "",
//     minPrice: "",
//     maxPrice: "",
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const queryString = new URLSearchParams({
//     populate: "*",
//     ...(filters.categorySlug && {
//       "filters[categories][slug][$eq]": filters.categorySlug,
//     }),
//     ...(filters.search && {
//       [`filters[${collectionName === "pods" ? "Model" : "Title"}][$containsi]`]:
//         filters.search,
//     }),
//     ...(filters.brand && {
//       "filters[Brand][$eq]": filters.brand,
//     }),
//     ...(filters.minPrice && {
//       "filters[Price][$gte]": filters.minPrice,
//     }),
//     ...(filters.maxPrice && {
//       "filters[Price][$lte]": filters.maxPrice,
//     }),
//   }).toString();

//   useEffect(() => {
//     const controller = new AbortController();

//     fetch(
//       `${import.meta.env.VITE_STRAPI_URL}/api/${collectionName}?${queryString}`,
//       {
//         signal: controller.signal,
//       },
//     )
//       .then(async (res) => {
//         if (!res.ok) {
//           const text = await res.text();
//           throw new Error(`HTTP ${res.status}: ${text.slice(0, 100)}`);
//         }
//         const json = await res.json();
//         return json;
//       })
//       .then(({ data = [] }) => {
//         setItems(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err.name !== "AbortError") {
//           console.error(`❌ BŁĄD ${collectionName}:`, err);
//           setError(err.message);
//           setLoading(false);
//         }
//       });

//     return () => controller.abort();
//   }, [queryString, collectionName]);

//   return { items, loading, error, filters, setFilters };
// };

import { useState, useEffect } from "react";

export const useCollectionItems = (collectionName = "products") => {
  const [items, setItems] = useState([]);

  const [filters, setFilters] = useState({
    categorySlug: "",
    search: "",
    brand: "",
    minPrice: "",
    maxPrice: "",
  });

  const [page, setPage] = useState(1);
  const pageSize = 12;

  const [pagination, setPagination] = useState({
    page: 1,
    pageCount: 1,
    total: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const queryString = new URLSearchParams({
    populate: "*",

    // PAGINACJA
    "pagination[page]": page,
    "pagination[pageSize]": pageSize,

    // FILTRY
    ...(filters.categorySlug && {
      "filters[categories][slug][$eq]": filters.categorySlug,
    }),
    ...(filters.search && {
      [`filters[${collectionName === "pods" ? "Model" : "Title"}][$containsi]`]:
        filters.search,
    }),
    ...(filters.brand && {
      "filters[Brand][$eq]": filters.brand,
    }),
    ...(filters.minPrice && {
      "filters[Price][$gte]": filters.minPrice,
    }),
    ...(filters.maxPrice && {
      "filters[Price][$lte]": filters.maxPrice,
    }),
  }).toString();

  useEffect(() => {
    const controller = new AbortController();
    // setLoading(true);

    fetch(
      `${import.meta.env.VITE_STRAPI_URL}/api/${collectionName}?${queryString}`,
      { signal: controller.signal },
    )
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`HTTP ${res.status}: ${text.slice(0, 100)}`);
        }
        return res.json();
      })
      .then(({ data = [], meta }) => {
        setItems(data);
        setPagination(meta.pagination);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error(`❌ BŁĄD ${collectionName}:`, err);
          setError(err.message);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [queryString, collectionName]);

  return {
    items,
    loading,
    error,
    filters,
    setFilters,
    page,
    setPage,
    pagination,
  };
};
