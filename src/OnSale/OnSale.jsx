import React from 'react';
import './OnSale.css';
import ItemsOnSale from '../Components/ItemsOnSale/ItemsOnSale';
import all_on_sale_product from '../Components/Assets/DataofCellinfo/all_on_sale_product';

const OnSale = () => {
    return (
        <div className='OnSale'>
            <h1>OnSale</h1>
            <div className="OnSale_Content">
                {all_on_sale_product.map((items, i) => {
                    return <ItemsOnSale key={i} img={items.img} />
                })}
            </div>
        </div>
    )
}

export default OnSale;