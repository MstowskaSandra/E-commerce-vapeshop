const ProductCard = ({ product }) => {
  const attrs = product 
  const image = attrs.Image?.[0] || {} 

  return (
    <div className="product-card">
      <div className="product-image">
        <img 
          src={`${import.meta.env.VITE_STRAPI_URL}${image.url}`} 
          alt={attrs.Title}
          loading="lazy"
        />
      </div>
      <div className="product-info">
        <h3>{attrs.Title}</h3>   
        <div className="product-price">
            <p>Cena: {attrs.Price}</p>
        </div>
        <button 
          className="add-to-cart-btn"
        >
          🛒 Do koszyka
        </button>
      </div>
    </div>
  )
}

export default ProductCard
