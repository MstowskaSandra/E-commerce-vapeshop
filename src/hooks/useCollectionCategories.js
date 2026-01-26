import { useState, useEffect } from "react";

export const useCollectionCategories = (collectionName) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!collectionName) {
      return;
    }

    const controller = new AbortController();

    fetch(
      `${import.meta.env.VITE_STRAPI_URL}/api/${collectionName}?populate=*`,
      {
        signal: controller.signal,
      },
    )
      .then(async (res) => {
        if (!res.ok) {
          await res.text();
          throw new Error(`HTTP ${res.status}`);
        }
        return res.json();
      })
      .then(({ data = [] }) => {
        const uniqueCategories = new Set();

        data.forEach((item) => {
          (item.categories || []).forEach((cat) => {
            if (cat.id && cat.Name) {
              uniqueCategories.add(
                JSON.stringify({
                  id: cat.id,
                  name: cat.Name,
                  slug: cat.slug,
                }),
              );
            }
          });
        });

        setCategories(Array.from(uniqueCategories).map(JSON.parse));
        setError(null);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
          setCategories([]);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [collectionName]);

  return { categories, loading, error };
};
