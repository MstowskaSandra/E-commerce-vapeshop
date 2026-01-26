import { useState, useEffect } from "react";

export const useSingleProduct = (slug, collectionName = "products") => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) {
      return;
    }

    const controller = new AbortController();

    fetch(
      `${import.meta.env.VITE_STRAPI_URL}/api/${collectionName}?filters[slug][$eq]=${slug}&populate=*`,
      { signal: controller.signal }
    )
      .then(async (res) => {
        if (!res.ok) {
          await res.text();
          throw new Error(`HTTP ${res.status}`);
        }
        return res.json();
      })
      .then(({ data = [] }) => {
        setProduct(data[0] || null);
        setError(null);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
          setProduct(null);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [slug, collectionName]);

  return { product, loading, error };
};
