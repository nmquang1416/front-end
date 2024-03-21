import React from 'react';
import service_icon from '../Assets/Img/service-icon.png';
import './ItemsService.css';

const ItemsService = (props) => {
  return (
    <div className="ItemsService">
      <div className="content-Service">
        <div className="content-service-right">
          <img src={props.icon} alt="" />
        </div>
        <div className="content-service-left">
          <div className="title-service">{props.Title}</div>
          <div className="sub-title-service">
            {props.Sub_title}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemsService;