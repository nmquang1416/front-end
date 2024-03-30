import React from 'react';
import './OnSale.css';
import ItemsOnSale from '../ItemsOnSale/ItemsOnSale';
import all_on_sale_product from '../Assets/DataofCellinfo/all_on_sale_product';

const OnSale = () => {
    const link_id = all_on_sale_product.find((el) => el.link )
  console.log(link_id)
    return (
        <div className='OnSale'>
            <h1>OnSale</h1>
            <div className="OnSale_Content">
                {all_on_sale_product.map((items, i) => {
                    return <ItemsOnSale key={i} link={items.link} img={items.img} />
                })}
            </div>
        </div>
    )
}

export default OnSale;