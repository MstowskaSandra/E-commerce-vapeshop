import { useState, useEffect } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_STRAPI_URL}/api/products?populate=*`)
      .then(async res => {
        const text = await res.text();
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${text.slice(0, 100)}`);
        return JSON.parse(text);
      })
      .then(({ data }) => {
        console.log('Dane z API:', data); 
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('BŁĄD FETCH:', err);
        setError(err);
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
};

