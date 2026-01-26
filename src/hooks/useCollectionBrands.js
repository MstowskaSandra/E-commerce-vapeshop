import { useState, useEffect } from "react";

export const useCollectionBrands = (collectionName) => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(
      `${import.meta.env.VITE_STRAPI_URL}/api/${collectionName}?populate=*`,
      {
        signal: controller.signal,
      },
    )
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const { data = [] } = await res.json();
        return [
          ...new Set(data.map((item) => item.Brand).filter(Boolean)),
        ].sort();
      })
      .then(setBrands)
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [collectionName]);

  return { brands, loading, error };
};
