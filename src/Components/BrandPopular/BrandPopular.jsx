import React from 'react';
import './BrandPopular.css';
import all_brand_popular from '../Assets/DataofCellinfo/all_brand_popular';
import Item_br from '../Items_brand_popolar/Items_brand_popular'



const BrandPopular = () => {
  return (
    <div className='Brand_popular'>
      <h1>Brand Popular</h1>
    <div className="popular-items">
        {all_brand_popular.map((items, i) => {
            return <Item_br key = {i} br_id = {items.br_id} br_name = {items.br_name} br_image = {items.br_image}/>
        })}
    </div>
    </div>
  )
}

export default BrandPopular;
