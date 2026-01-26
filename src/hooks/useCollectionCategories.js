import { useState, useEffect } from "react";

export const useCollectionCategories = (collectionName) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!collectionName) return;

    const fetchCategories = async () => {
      try {
        const url = `${import.meta.env.VITE_STRAPI_URL}/api/${collectionName}?populate=*`;
        const res = await fetch(url);

        if (!res.ok) {
          return;
        }

        const { data } = await res.json();
        if (!Array.isArray(data) || data.length === 0) {
          return;
        }

        const possibleCategoryFields = [
          "categories",
          "kategoriapods",
          "categoryPods",
          "kategorie",
        ];

        const categoryField = possibleCategoryFields.find((field) => data[0]?.[field]);

        if (!categoryField) {
          return;
        }

        const categoryMap = new Map();

        data.forEach((item) => {
          const itemCategories = Array.isArray(item[categoryField]) ? item[categoryField] : [];

          itemCategories.forEach((cat) => {
            const id = cat.id || cat.documentId;
            const name =
              cat.Name || cat.name || cat.attributes?.Name || cat.attributes?.name;
            const slug = cat.slug || cat.attributes?.slug;

            if (id && name && !categoryMap.has(id)) {
              categoryMap.set(id, { id, name, slug });
            }
          });
        });

        setCategories(Array.from(categoryMap.values()));
      } catch (err) {
        console.error(`❌ Błąd pobierania kategorii: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [collectionName]);

  return { categories, loading };
};
