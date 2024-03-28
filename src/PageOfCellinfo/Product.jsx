import React from 'react'
import './Css/Product.css'
import ProductFillter from '../Components/ProductFillter/ProductFillter';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import ProductDetails_Info from '../Components/ProductDetails_Info/ProductDetails_Info'
import Banner_section from '../Components/Assets/Img/banner-section.png'

const Product = () => {
  return (
    <div className='section'>
      <div className="banner-section" style={{ backgroundImage: `url(${Banner_section})` }}>
        <div className="section-title">
          <h1>Product - Cellinfo.com</h1>
        </div>
      </div>
      <div className='Product'>
        <ProductFillter />
        <ProductDisplay />
      </div>
    </div>
  )
}

export default Product
