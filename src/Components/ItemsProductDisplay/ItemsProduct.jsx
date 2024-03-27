import React from 'react';
import './ItemsProduct.css';

import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

const ItemsProduct = (props) => {
  
  
  return (
    <div className='ItemsProduct'>
      <img src={props.image} alt="" />
      <div className="content-descript">
        <p className="title-card-product">{props.name} </p>
        <p className="sub-title-card-product">{props.Description}</p>
        <div className="button-product-card">
          <button className="Button-order">{props.button_1}</button>
          <Link to="/ProductOfCellinfo/{2}"><button className="Button-more">{props.button_2}</button></Link>
          
        </div>
      </div>
    </div>
  )
}

export default ItemsProduct
