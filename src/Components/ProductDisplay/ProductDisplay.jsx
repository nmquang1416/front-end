import React from 'react'

import './ProductDisplay.css';

import ItemsProductDisplay from '../ItemsProductDisplay/ItemsProduct';

import all_product_cellinfo from '../Assets/DataofCellinfo/all_product_cellinfo';




export function GetId() {
  return (
    <div>
      {all_product_cellinfo.map(Product_id =>(
        <p>{Product_id.id}</p>
    ))}
    </div>
  )
}



const ProductDisplay = () => {
    return (
        <div className='Product-Display' >
            {all_product_cellinfo.map((items, i) => {
                return <ItemsProductDisplay key={i} {...items} />
            })}
        </div>
    )
}

export default ProductDisplay;