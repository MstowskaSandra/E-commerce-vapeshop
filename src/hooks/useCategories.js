import { useState, useEffect } from "react";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_STRAPI_URL}/api/categories?populate=*&sort=Name:asc`)
      .then(async res => {
        const text = await res.text();
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return JSON.parse(text);
      })
      .then(({ data }) => {
        setCategories(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Błąd kategorii:', err);
        setLoading(false);
      });
  }, []);

  return { categories, loading };
};
