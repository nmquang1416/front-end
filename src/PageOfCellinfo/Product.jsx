import React, { useEffect } from 'react'
import './Css/Product.css'
import ProductFillter from '../Components/ProductFillter/ProductFillter';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import ProductDetails_Info from '../Components/ProductDetails_Info/ProductDetails_Info'
import Banner_section from '../Components/Assets/Img/banner-section.png'
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import { useState } from 'react';
import all_product_cellinfo from '../Components/Assets/DataofCellinfo/all_product_cellinfo';


const Product = () => {
  //


  const onChecked = (value, checked) => {
    console.log(value, checked)
  };

  const [Check, setCheck] = useState({});
  
  Check={};

  onChecked = (value,Check) => {
    Check[value] = Check;
  };

  useEffect(() =>{
    const ProductList = all_product_cellinfo.filter((items) => {
      return Check[items.categories]
    })

    
  });

  ///




  return (
    <div className='section'>
      <div className="banner-section" style={{ backgroundImage: `url(${Banner_section})` }}>
        <div className="section-title">
          <h1>Product - Cellinfo.com</h1>
        </div>
      </div>
      <Breadcrumbs page="Product" />
      <div className='Product'>
        
        <ProductFillter onCheck={onChecked}/>
        <ProductDisplay />
      </div>
    </div>
  )
}

export default Product
