import React from 'react'
import ItemsService from '../ItemsService/ItemsService';
import all_card_service from '../Assets/DataofCellinfo/all_card_service';
import './ServiceCard.css';

const ServiceCard = () => {
  const find_id_f = () =>{
    const find_id = all_card_service.find((item) => item.id)
  } 
  
  React.useEffect(() => {
    find_id_f()
  })

  return (
    
    <div className='container-ServiceCard'>
        {all_card_service.map((items, i) => {
            return <ItemsService key={i} event_element={items.event_element} icon={items.icon} Title={items.Title} Sub_title={items.Sub_title}/>
          })}
    </div>
  )
  
}

export default ServiceCard