import React from 'react'
import ProductCompare from '../Components/ProductCompare/ProductCompare';
import './Css/Compare.css';
import Banner_section from '../Components/Assets/Img/banner-section.png'
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';

const Compare = () => {
  return (
    <div className='section'>
      <div className="banner-section" style={{ backgroundImage: `url(${Banner_section})` }}>
        <div className="section-title">
          <h1>Compare</h1>
        </div>
      </div>
      <Breadcrumbs page="Compare" />
      <ProductCompare/>
    </div>
  )
}

export default Compare
