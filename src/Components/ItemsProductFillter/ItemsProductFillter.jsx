import React from 'react'
import './ItemsProductFillter.css'


const ItemsProductFillter = (props) => {
  return (
    <div className='ItemsProductFillter'>
      <form action="/">
        <input type="checkbox" id={props.title} name={props.title} value={props.title}/> 
        <label htmlFor={props.title}>{props.title}</label>
      </form>
    </div>
  )
}

export default ItemsProductFillter;
