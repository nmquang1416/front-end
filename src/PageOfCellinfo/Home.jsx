import React from 'react';
import Hero from '../Components/Hero/Hero';
import BrandPopular from '../Components/BrandPopular/BrandPopular';
import PhonePopular from '../Components/PhonePopular/PhonePopular';
import OnSale from '../OnSale/OnSale';

const Home = () => {
  return (
    <div>
      <Hero/>
      <BrandPopular/>
      <PhonePopular/>
      <OnSale/>
    </div>
  )
}

export default Home;
