import { useState, useEffect } from "react";

export const useBrands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_STRAPI_URL}/api/products?populate=*`)
      .then(async res => {
        const text = await res.text();
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const { data } = JSON.parse(text);
        
        const uniqueBrands = [
          ...new Set(
            data
              .map(product => product.Brand) 
              .filter(Boolean)
          )
        ].sort();

        setBrands(uniqueBrands);
        setLoading(false);
      })
      .catch(err => {
        console.error('BŁĄD MARKI:', err);
        setLoading(false);
      });
  }, []);

  return { brands, loading };
};
