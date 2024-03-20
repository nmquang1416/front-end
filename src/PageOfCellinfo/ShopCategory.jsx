import React, { useContext } from 'react'
import './Css/ShopCategory.css'
import { ProductContext } from '../Context/HomeContext'


const ShopCategory = (props) => {
    const {all_product_cellinfo} =useContext(ProductContext)
  return (
    <div className='shop-category'>
      
    </div>
  )
}

export default ShopCategory;
