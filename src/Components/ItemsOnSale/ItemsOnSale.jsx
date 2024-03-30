import React from 'react';
import './ItemsOnSale.css';
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import all_on_sale_product from '../Assets/DataofCellinfo/all_on_sale_product';


const ItemsOnSale = (BannerOnSale) => {
  
  return (
    <Link to={"/ProductOfCellinfo/" + BannerOnSale.link}>
      <div className='Items_OnsaleBanner'>
        <img src={BannerOnSale.img} alt="" /> 
    </div>
    </Link>
    
  )
}

export default ItemsOnSale;
