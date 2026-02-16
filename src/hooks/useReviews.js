import { useEffect, useState } from "react";

const API_URL = "http://localhost:1337/api/reviews?populate=*";

export const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL);

        if (!res.ok) {
          throw new Error(`Błąd: ${res.statusText}`);
        }

        const json = await res.json();

        setReviews(json.data || []);
      } catch (err) {
        setError(err.message || "Nie udało się pobrać opinii");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return { reviews, loading, error };
};
