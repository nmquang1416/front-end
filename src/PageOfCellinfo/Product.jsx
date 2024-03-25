import React from 'react'
import './Css/Product.css'
import ProductFillter from '../Components/ProductFillter/ProductFillter';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import ProductDetails_Info from '../Components/ProductDetails_Info'

const Product = () => {
  return (
    <div className='Product'> 
      {/* <ProductDetails_Info/> */}
      <ProductFillter/>
      <ProductDisplay/>
    </div>
  )
}

export default Product
