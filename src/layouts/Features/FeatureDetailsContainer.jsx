import { useParams } from 'react-router-dom';
import FeatureDetails from './FeatureDetails'; 
import { features } from '../../assets/VCT.js';

function FeatureDetailsContainer() {
  const { id } = useParams();
  const feature = features.find(f => f.id === Number(id));
  if (!feature) {
    return <div>Feature not found</div>; // or 404 page
  }
  return <FeatureDetails {...feature} />;
}


export default FeatureDetailsContainer;