import React from 'react';
import '../Items_brand_popolar/Items_brand_popular.css';
import all_brand_popular from '../Assets/DataofCellinfo/all_brand_popular'
import { Link } from 'react-router-dom';


const Items_brand_popular = (props) => {
  return (
    <Link to="/ProductOfCellinfo"><div className='items-Brand-Popular' style={{ backgroundImage: `url(${props.br_image})`}}>
    <p>{props.br_name}</p>
</div></Link>
  )
}

export default Items_brand_popular
