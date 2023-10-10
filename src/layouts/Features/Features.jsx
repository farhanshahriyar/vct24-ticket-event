import React from 'react'
import FeatureList from './FeatureList'

const Features = () => {
  return (
    <div className="">
        <section className="my-24">
            <h1 className="text-3xl font-sara font-bold text-center">Latest Features</h1>
            <p className="mt-5 text-lg font-medium text-tea-secondary-clr lg:max-w-3xl mx-auto mb-10 text-center">VCT Championship 24 will be held in 2024. The best teams from all over the world will compete for the title of the best team in the world.</p>
        
            <FeatureList/>
        </section>
    </div>
  )
}

export default Features
