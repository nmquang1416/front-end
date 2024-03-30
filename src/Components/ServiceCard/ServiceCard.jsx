import React from 'react'
import ItemsService from '../ItemsService/ItemsService';
import all_card_service from '../Assets/DataofCellinfo/all_card_service';
import './ServiceCard.css';

const ServiceCard = () => {
  const ContactScroll =()=> document.getElementById('Contact-for-sale').scrollIntoView({
    behavior: 'smooth'
  });
  const RepairScroll =()=>  document.getElementById('repair-and-warranty').scrollIntoView({
    behavior: 'smooth'
  });
  const PurchaseScroll =()=>  document.getElementById('Purchase-return-policy').scrollIntoView({
    behavior: 'smooth'
  });
  const RefundScroll =()=> document.getElementById('Refund-policy').scrollIntoView({
    behavior: 'smooth'
  });
  return (
    <div className='container-ServiceCard'>
        {all_card_service.map((items, i) => {
            return <ItemsService key={i} event_element={items.event_element} icon={items.icon} Title={items.Title} Sub_title={items.Sub_title}/>
          })}
    </div>
  )
  
}

export default ServiceCard