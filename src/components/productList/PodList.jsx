import { useCollectionItems } from '../../hooks/useCollectionItems';
import Filters from '../Filters';
import PodCard from '../../components/productCard/PodCard'; 

const PodList = () => {
  const { items: pods, loading, error, filters, setFilters } = 
    useCollectionItems('pods'); 

    if (loading) return <div>Ładowanie urządzeń...</div>;
    if (error) return <div>Błąd: {error.message}</div>;

    return (
      <>
        <h2>Urządzenia POD</h2>
        <Filters
          filters={filters}
          onChange={setFilters}
          collectionName="pods"
        />
        <div>
          {pods.map((pod) => (
            <PodCard key={pod.id} pod={pod} />
          ))}
        </div>
      </>
    );
};

export default PodList;