import React from 'react'
import all_product_cellinfo from '../Assets/DataofCellinfo/all_product_cellinfo'
import arrow from '../Assets/Img/breadcrum_arrow.png'
import "./Breadcrumbs.css"
const Breadcrumbs = (props) => {
  return (
    <div className='breadcrumbs'>
      Home <img src={arrow} alt=""/> {props.page} <img src={arrow} alt=""/> {props.name}
    </div>
  )
}

export default Breadcrumbs
