import React from 'react'
import './Css/Product.css'
import ProductFillter from '../Components/ProductFillter/ProductFillter';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  return (
    <div className='Product'> 
      <ProductFillter/>
      <ProductDisplay/>
    </div>
  )
}

export default Product
