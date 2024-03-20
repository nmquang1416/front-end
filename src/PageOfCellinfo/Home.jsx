import React from 'react';
import Hero from '../Components/Hero/Hero';
import BrandPopular from '../Components/BrandPopular/BrandPopular';
import PhonePopular from '../Components/PhonePopular/PhonePopular';
import OnSale from '../Components/OnSale/OnSale';
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <BrandPopular/>
      <PhonePopular/>
      <OnSale/>
      <Footer/>
    </div>
  )
}

export default Home;
