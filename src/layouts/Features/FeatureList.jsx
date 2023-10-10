import React from 'react'
import FeatureCard from './FeatureCard'
import { features } from '../../assets/VCT.js';


function FeatureList() {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5">
            {
            features.map((feature) => ( 
                // <FeatureCard key={feature.id} feature={feature} />
                <FeatureCard key={feature.id} item={feature} />
            ))
            }
        </div>
    </div>
  )
}

export default FeatureList
