import React from 'react'
import img_large from '../Assets/Img/img-large.png'
import img_small from '../Assets/Img/img-small.png'
import './ProductDetails_Info.css'

const ProductDetails_Info = () => {
    return (
        <div className='ProductDetails'>
            <div className='ProductDetails_Info'>
                <div className="Details-info-left">
                    <img src={img_large} alt="" />
                    <div className="more-img">
                        <img src={img_small} alt="" />
                        <img src={img_small} alt="" />
                        <img src={img_small} alt="" />
                        <img src={img_small} alt="" />
                    </div>
                </div>
                <div className="Details-info-right">
                    <p className="title">Iphone 15 pro max</p>
                    <p className="sub-title">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>

                    <p className="heading">Color</p>
                    <div className="Color-choice">
                        <div className="Color white"></div>
                        <div className="Color black"></div>
                        <div className="Color blue"></div>
                        <div className="Color gold"></div>
                    </div>

                    <p className="heading">Storage</p>
                    <div className="Storage">
                        <button className="btn-Storage 128gb">128gb</button>
                        <button className="btn-Storage 256gb">256gb</button>
                        <button className="btn-Storage 512gb">512gb</button>
                    </div>

                    <div className="Price">
                        <span className="Price-New">899.9 <span className='payment'>$</span></span>
                        <span className="Price-Old">899.9$</span>
                    </div>

                    <div className="btn-action">
                        <button className='btn-high-emphasis Compare'>Compare</button>
                        <button className='btn-high-emphasis Download'>Download Doc</button>
                        <button className='btn-low-emphasis Order'>Order</button>
                    </div>
                </div>
            </div>
            <div className="ProductDetails_More">
                <div className="nav-phone-info">
                    <div className="phone-info-items General">General</div>
                    <div className="phone-info-items Performance">Performance</div>
                    <div className="phone-info-items Question">Question</div>
                </div>
                <div className="iphone-info-details">
                    <p className="Description-title">Iphone Galaxy is best phone</p>
                    <p className="Description-sub-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p className="Description-title">Iphone Galaxy is best phone</p>
                    <p className="Description-sub-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p className="Description-title">Iphone Galaxy is best phone</p>
                    <p className="Description-sub-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails_Info
