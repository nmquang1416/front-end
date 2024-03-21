import React from 'react';
import './Css/Service.css';
import Banner_section from '../Components/Assets/Img/banner-section.png';
import ItemsService from '../Components/ItemsService/ItemsService';
import all_card_service from '../Components/Assets/DataofCellinfo/all_card_service';

const Service = () => {
  return (
    <div>
      <div className='Section-site' >
        <div className="section-container-content">
          <div className="banner-section" style={{ backgroundImage: `url(${Banner_section})` }}>
            <div className="section-title">
              <h1>Service</h1>
            </div>
          </div>
          <div className="Description">
            <h2 className="Heading">What do you need help with?</h2>
            <p className="sub-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            <p className="sub-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>

          {all_card_service.map((items, i) => {
            return <ItemsService key={i} Title={items.Title} Sub_title={items.Sub_title}/>
          })}

        </div>
      </div>
    </div>
  )
}

export default Service
