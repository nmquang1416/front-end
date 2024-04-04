import React from 'react'

import './ProductDisplay.css';

import ItemsProductDisplay from '../ItemsProductDisplay/ItemsProduct';

import all_product_cellinfo from '../Assets/DataofCellinfo/all_product_cellinfo';


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