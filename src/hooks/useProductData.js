import { useSingleProduct } from "./useSingleProduct";

export const useProductData = () => {
  
  
  const fullPath = window.location.pathname;
  const slug = fullPath.split("/").pop();
  const collection = fullPath.includes("/pods/") ? "pods" : "products";
  
  const { product, loading, error } = useSingleProduct(slug, collection);
  
  if (loading) return { loading: true };
  if (error || !product) return { error: true, collection, slug };
  
  const attrs = product.attributes || product;
  
  return {
    attrs,
    imgSrc: attrs.Image?.[0]?.url 
      ? `${import.meta.env.VITE_STRAPI_URL}${attrs.Image[0].url}` 
      : "/placeholder.jpg",
    title: attrs.Title || attrs.Model || attrs.Brand || attrs.Name || "Produkt",
    hasLiquids: !!(attrs.Volume || attrs.Strength || attrs.Flavor),
    hasDevice: !!(attrs.Battery || attrs.Power),
    slug,
    collection
  };
};
