import React from 'react';
import './ItemsPhonePopularLeft.css'

const ItemsPhonePopularLeft = (Content_left) => {
    return (

        <div className="Phone_popular_content_left" style={{ backgroundImage: `url(${Content_left.img})` }} >
            <div className="content">
            <p className="title-card-large">{Content_left.title}</p>
            <p className="sub-title-card-large">{Content_left.sub_title}</p>
            <button className='button-medium'>{Content_left.button}</button>
            </div>
        </div>
    )
}

export default ItemsPhonePopularLeft;