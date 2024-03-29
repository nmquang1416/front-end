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
<<<<<<< HEAD
          <button className="Button-order">{props.button_1}</button>
          <Link to="/ProductOfCellinfo/{2}"><button className="Button-more">{props.button_2}</button></Link>
=======
          <Link to={"/Compare/"}><button className="Button-order">{props.button_1}</button></Link>
          <Link to={"/ProductOfCellinfo/"+props.id}><button className="Button-more">{props.button_2}</button></Link>
>>>>>>> 068e3d82a6da10ec06ed4efe2f50dcb1bbecf693
        </div>
      </div>
    </div>
  )
}

export default ItemsProduct
