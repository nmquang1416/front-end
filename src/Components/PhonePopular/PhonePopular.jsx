import React from 'react';
import "./PhonePopular.css";
import ItemsPhonePopularLeft from '../ItemsPhonePopular/ItemsPhonePopularLeft';
import ItemsPhonePopularRight from '../ItemsPhonePopular/ItemsPhonePopularRight';
import all_phone_popular_right from '../Assets/DataofCellinfo/all_phone_popular_right';
import all_phone_popular_left from '../Assets/DataofCellinfo/all_phone_popular_left';


const PhonePopular = () => {
    return (
        <div className='Brand_popular'>
            <h1>Phone Popular</h1>
            <div className='Phone_Popular'>
                <div className="content-right">
                    {all_phone_popular_left.map((items, i) => {
                        return <ItemsPhonePopularLeft key={i} img={items.img} title={items.title} sub_title={items.sub_title} button={items.button} />
                    })}
                </div>
                <div className="content-left">
                    {all_phone_popular_right.map((items, i) => {
                        return <ItemsPhonePopularRight key={i} img={items.img} title={items.title} sub_title={items.sub_title} button={items.button} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default PhonePopular;