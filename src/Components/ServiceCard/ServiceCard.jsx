import React from 'react'
import ItemsService from '../ItemsService/ItemsService';
import all_card_service from '../Assets/DataofCellinfo/all_card_service';
import './ServiceCard.css';

const ServiceCard = () => {
  return (
    <div className='container-ServiceCard'>
        {all_card_service.map((items, i) => {
            return <ItemsService key={i} icon={items.icon} Title={items.Title} Sub_title={items.Sub_title}/>
          })}
    </div>
  )
}

export default ServiceCard