import { useSingleProduct } from "./useSingleProduct";

export const useProductData = () => {
  
  
  const fullPath = window.location.pathname;
  const slug = fullPath.split("/").pop();
  const collection = fullPath.includes("/pods/") ? "pods" : "products";
  
  const { product, loading, error } = useSingleProduct(slug, collection);
  
  if (loading) return { loading: true };
  if (error || !product) return { error: true, collection, slug };
  
  const attrs = product.attributes || product;

  const image = attrs.Image?.[0];
  const imgSrc = image
    ? image.formats?.large?.url || image.formats?.medium?.url || image.url
    : "/placeholder.jpg";

  return {
    attrs,
    imgSrc,
    title: attrs.Title || attrs.Model || attrs.Brand || attrs.Name || "Produkt",
    hasLiquids: !!(attrs.Volume || attrs.Strength || attrs.Flavor),
    hasDevice: !!(attrs.Battery || attrs.Power),
    slug,
    collection,
  };
};
