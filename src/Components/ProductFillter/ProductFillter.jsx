import React from 'react'

import './ProductFillter.css'

import ItemsProductFillter from '../ItemsProductFillter/ItemsProductFillter';

import { Brand_fillter } from '../Assets/DataofCellinfo/all_fillter_button';

import { Price_fillter } from '../Assets/DataofCellinfo/all_fillter_button';

import { Demand_fillter } from '../Assets/DataofCellinfo/all_fillter_button';

import { Storage_fillter } from '../Assets/DataofCellinfo/all_fillter_button';



const ProductFillter = () => {
  return (
    <div className='ProductFillter'>
      <div className="Brand-Fillter">
      <p className="title-fillter">
          Brand
        </p>
        {Brand_fillter.map((items, i) => {
          return <ItemsProductFillter key={i} title={items.title} />
        })}
      </div>

      <div className="Price-Fillter">
      <p className="title-fillter">
          Price($)
        </p>
        {Price_fillter.map((items, i) => {
          return <ItemsProductFillter key={i} title={items.title} />
        })}
      </div>

      <div className="Demand-Fillter">
        <p className="title-fillter">
          Demand
        </p>
        {Demand_fillter.map((items, i) => {
          return <ItemsProductFillter key={i} title={items.title} />
        })}
      </div>

      <div className="Storage-Fillter">
        <p className="title-fillter">
        Storage (Gigabyte)
        </p>
        {Storage_fillter.map((items, i) => {
          return <ItemsProductFillter key={i} title={items.title} />
        })}
      </div>
    </div>
  )
}

export default ProductFillter