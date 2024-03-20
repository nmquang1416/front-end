import React from 'react';
import './ItemsProduct.css';
import all_product_cellinfo from '../Assets/DataofCellinfo/all_product_cellinfo'
import iphone15 from '../Assets/Img/iphone-items-product.png';



const ItemsProduct = (props) => {
  return (
    <div className='ItemsProduct'>
      <img src={props.image} alt="" />
      <div className="content-descript">
        <p className="title-card-product">{props.name} </p>
        <p className="sub-title-card-product">{props.Description}</p>
        <div className="button-product-card">
          <button className="Button-order">{props.button_1}</button>
          <button className="Button-more">{props.button_2}</button>
        </div>
      </div>
    </div>
  )
}

export default ItemsProduct
