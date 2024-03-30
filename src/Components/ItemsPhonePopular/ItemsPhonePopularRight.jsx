import React from 'react';
import './ItemsPhonePopularRight.css';
import { Link } from 'react-router-dom';


const ItemsPhonePopularRight = (Content_right) => {
    return (
        <Link to={"/ProductOfCellinfo/" + Content_right.link}>
            <div className="Phone_popular_content_right" style={{ backgroundImage: `url(${Content_right.img})` }} >
            <div className="content">
            <p className="title-card-large">{Content_right.title}</p>
            <p className="sub-title-card-large">{Content_right.sub_title}</p> 
            <button className='button-medium'>{Content_right.button}</button>
            </div>
        </div>
        </Link>
        
    )
}

export default ItemsPhonePopularRight;