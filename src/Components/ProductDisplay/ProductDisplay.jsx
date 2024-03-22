import React from 'react'

import './ProductDisplay.css';

import ItemsProductDisplay from '../ItemsProductDisplay/ItemsProduct';

import all_product_cellinfo from '../Assets/DataofCellinfo/all_product_cellinfo';

import { all_product_cellinfo2 } from '../Assets/DataofCellinfo/all_product_cellinfo';

import iphone15 from '../Assets/Img/iphone-items-product.png';

const ProductDisplay = () => {
    return (
        <div className='Product-Display' >
            {all_product_cellinfo.map((items, i) => {
                return <ItemsProductDisplay key={i} image={items.image} name={items.name} Description={items.Description} button_1={items.button_1} button_2={items.button_2} />
            })}
        </div>
    )
}

export default ProductDisplay;