import React from 'react';
import './ItemsOnSale.css';

const ItemsOnSale = (BannerOnSale) => {
  return (
    <div className='Items_OnsaleBanner'>
        <img src={BannerOnSale.img} alt="" /> 
    </div>
  )
}

export default ItemsOnSale;
