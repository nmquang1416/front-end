import React from 'react'

import './ProductDisplay.css';

import ItemsProductDisplay from '../ItemsProductDisplay/ItemsProduct';

import all_product_cellinfo from '../Assets/DataofCellinfo/all_product_cellinfo';
import all_data_relation from '../Assets/DataofCellinfo/all_data_relation'


const ProductDisplayRelation = () => {
    return (
        <div className='Product-Display' >
            {all_data_relation.map((items, i) => {
                return <ItemsProductDisplay key={i} name={items.name} Description={items.des} button_1={items.button_compare} button_2={items.button_order} />
            })}
        </div>
    )
}

export default ProductDisplayRelation;