const PodCard = ({ pod }) => {
  const price = pod.Price || 'Brak ceny';
  const image = pod.Image?.[0]?.url 
    ? `${import.meta.env.VITE_STRAPI_URL}${pod.Image[0].url}` 
    : '/placeholder.jpg';

  return (
    <div className="pod-card">
      <img src={image} alt={pod.Title || 'POD'} />
      <h3>{pod.Model}</h3>
      <p>Moc: {pod.Power}</p>
      <p>Bateria: {pod.Battery}</p>
      <span className="price">Price: {price}</span>
    </div>
  );
};

export default PodCard;