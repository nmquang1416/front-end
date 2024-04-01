import React, { useRef, useState } from 'react';
import './Css/Service.css';
import Banner_section from '../Components/Assets/Img/banner-section.png';
import ServiceCard from '../Components/ServiceCard/ServiceCard';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import all_card_service from '../Components/Assets/DataofCellinfo/all_card_service';
import icon_1 from '../Components/Assets/Img/service-icon.png';




const Service = (props) => {


  const Contact = useRef(null)
  const executeScrollContact = () => Contact.current.scrollIntoView(
    {behavior: 'smooth'}
  )
  const Repair = useRef(null)
  const executeScrollRepair = () => Repair.current.scrollIntoView(
    {behavior: 'smooth'}
  )
  const Purchase = useRef(null)
  const executeScrollPurchase = () => Purchase.current.scrollIntoView(
    {behavior: 'smooth'}
  )
  const Refund = useRef(null)
  const executeScrollRefund = () => Refund.current.scrollIntoView(
    {behavior: 'smooth'}
  )

  return (
    <div>

      <div className='Section-site' >
        <div className="section-container-content">
          <div className="banner-section" style={{ backgroundImage: `url(${Banner_section})` }}>
            <div className="section-title">
              <h1>Service</h1>
            </div>
          </div>
          <Breadcrumbs page="Service" />
          <div className="Description">
            <h2 className="Heading">What do you need help with?</h2>
            <p className="sub-heading">"CellInfo" can refer to various services or functionalities related to cellular networks and telecommunications. Here are some common services or applications related to CellInfo:</p>
          </div>
          <div className="container-ServiceCard">
            <div className="ItemsService" id="ContactScroll" onClick={executeScrollContact}>
              <div className="content-Service">
                <div className="content-service-right">
                  <img src={icon_1} alt="" />
                </div>
                <div className="content-service-left">
                  <div className="title-service">Contact for sale</div>
                  <div className="sub-title-service">
                    There are software tools and applications available for monitoring and analyzing CellInfo data.
                  </div>
                </div>
              </div>
            </div>
            <div className="ItemsService" id="ContactScroll" onClick={executeScrollRepair}>
              <div className="content-Service">
                <div className="content-service-right">
                  <img src={icon_1} alt="" />
                </div>
                <div className="content-service-left">
                  <div className="title-service">repair and warranty</div>
                  <div className="sub-title-service">
                  Some companies offer mobile network testing services that utilize CellInfo data to assess the performance and coverage of cellular networks
                  </div>
                </div>
              </div>
            </div>
            <div className="ItemsService" id="ContactScroll" onClick={executeScrollPurchase}>
              <div className="content-Service">
                <div className="content-service-right">
                  <img src={icon_1} alt="" />
                </div>
                <div className="content-service-left">
                  <div className="title-service">Purchase/return policy</div>
                  <div className="sub-title-service">
                  Network planning and optimization software tools use CellInfo data to optimize the deployment and configuration of cell towers and base stations.
                  </div>
                </div>
              </div>
            </div>
            <div className="ItemsService" id="ContactScroll" onClick={executeScrollRefund}>
              <div className="content-Service">
                <div className="content-service-right">
                  <img src={icon_1} alt="" />
                </div>
                <div className="content-service-left">
                  <div className="title-service">Refund policy</div>
                  <div className="sub-title-service">
                  Network planning and optimization software tools use CellInfo data to optimize the deployment and configuration of cell towers and base stations.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Description">
            <h2 className="Heading" id="Contact-for-sale" ref={Contact}>Contact for sale</h2>
            <p className="sub-heading">Network Monitoring Tools: There are software tools and applications available for monitoring and analyzing CellInfo data. These tools provide real-time information about cell signal strength, quality, and other parameters, allowing users to assess network performance and troubleshoot issues.</p>
            <p className="sub-heading">Network planning and optimization software tools use CellInfo data to optimize the deployment and configuration of cell towers and base stations. These tools help network operators improve coverage, capacity, and quality of service within their networks.</p>
            <p className="sub-heading">NLocation-based services utilize CellInfo data to determine the geographical location of mobile devices based on the cell towers they are connected to. This information is used in various applications such as navigation, asset tracking, and location-based advertising.</p>
          </div>
          <div className="Description">
            <h2 className="Heading" id="repair-and-warranty" ref={Repair}>repair and warranty</h2>
            <p className="sub-heading">Some companies offer mobile network testing services that utilize CellInfo data to assess the performance and coverage of cellular networks. These services may involve drive testing or walk testing, where testers move through different areas to collect CellInfo data and evaluate network performance..</p>
            <p className="sub-heading">CellInfo data can be used to identify areas with weak cell signals, where cellular signal booster systems can be installed to improve signal strength and coverage. These systems amplify and rebroadcast signals to enhance cellular connectivity in indoor or remote areas.</p>
            <p className="sub-heading">Some mobile network APIs and SDKs provide access to CellInfo data, allowing developers to integrate cellular network information into their applications. Developers can use this data to create location-aware apps, optimize network performance, or enhance user experience.</p>
          </div>
          <div className="Description">
            <h2 className="Heading" id="Purchase-return-policy" ref={Purchase}>Purchase/return policy</h2>
            <p className="sub-heading">Overall, CellInfo services play a crucial role in optimizing cellular network performance, improving coverage and capacity, and enhancing the overall user experience for mobile subscribers.</p>
            <p className="sub-heading">CellInfo data enables operators to identify sources of interference within the network. By analyzing interference levels from neighboring cells or external sources, operators can implement strategies to minimize interference and improve overall network performance.</p>
            <p className="sub-heading">CellInfo includes parameters related to QoS, such as data throughput, latency, and packet loss rates. By monitoring and analyzing these parameters, operators can ensure that service levels meet or exceed user expectations.</p>
          </div>
          <div className="Description">
            <h2 className="Heading" id="Refund-policy" ref={Refund}>Refund policy</h2>
            <p className="sub-heading">Overall, CellInfo is essential for optimizing network performance, ensuring reliable connectivity, and delivering high-quality services to mobile users. It serves as a fundamental tool for network planning, management, and optimization in the dynamic and complex environment of cellular telecommunications.</p>
            <p className="sub-heading">Network Monitoring Tools: There are software tools and applications available for monitoring and analyzing CellInfo data. These tools provide real-time information about cell signal strength, quality, and other parameters, allowing users to assess network performance and troubleshoot issues.</p>
            <p className="sub-heading">CellInfo data is crucial for network planning activities. By analyzing CellInfo, network operators can determine the optimal locations for new cell towers, adjust antenna parameters, and optimize coverage areas to ensure seamless connectivity for users.</p>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Service
