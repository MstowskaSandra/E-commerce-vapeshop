import { useCollectionCategories } from "./useCollectionCategories";

const STATIC_CATEGORIES = [
  { id: 1, txt: "Sole nikotynowe", slug: "liquid-sole-nikotynowe", collection: "products", img: "Liquid" },
  { id: 2, txt: "Nikotyna", slug: "liquid-nikotyna", collection: "products", img: "Liquid" },
  { id: 3, txt: "PODy", slug: "pody", collection: "pods", img: "Pod" },
  { id: 4, txt: "KITy", slug: "kity", collection: "pods", img: "Pod" },
  { id: 5, txt: "Atomizery & COILS", slug: "atomizery", collection: "pods", img: "Atomizer" },
];

export const useHomeCategories = () => {
  const { categories: strapiCategories, loading } = useCollectionCategories();
  
  const homeCategories = STATIC_CATEGORIES.map(staticCat => {
    const strapiCat = strapiCategories.find(cat => 
      cat.slug?.includes(staticCat.slug) || 
      cat.Name?.toLowerCase().includes(staticCat.txt.toLowerCase())
    );
    
    return {
      ...staticCat,
      strapiSlug: strapiCat?.slug || staticCat.slug,
      strapiName: strapiCat?.Name || staticCat.txt
    };
  });

  return { categories: homeCategories, loading };
};