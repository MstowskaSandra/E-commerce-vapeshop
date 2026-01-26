import { useState, useEffect } from "react";

export const useCollectionBrands = (collectionName) => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_STRAPI_URL}/api/${collectionName}?populate=*`)
      .then(async res => {
        const text = await res.text();
        if (!res.ok) {
          console.warn(`Nie udało się pobrać marek dla ${collectionName}`);
          setLoading(false);
          return;
        }
        const { data } = JSON.parse(text);
        
        const uniqueBrands = [
          ...new Set(
            data
              .map(item => item.Brand) 
              .filter(Boolean)
          )
        ].sort(); 

        setBrands(uniqueBrands);
        setLoading(false);
      })
      .catch(err => {
        console.error(`BŁĄD marki ${collectionName}:`, err);
        setLoading(false);
      });
  }, [collectionName]);

  return { brands, loading };
};