import React from 'react'
import './ProductCompare.css'
import iphoneCompare from '../Assets/Img/iphone-conpare.png';

const ProductCompare = () => {
    return (
        <div className='Content-Product-Compare'>
            <div className="Product-Compare-Left">
                <div className="Box-Title">
                    <div className="Block-null"></div>
                    <div className="Block Block-Screen-Title">
                        <p className="Details-compare Screen-size-title">Kích thước màn hình</p>
                        <p className="Details-compare Screen-technology-title">Công nghệ màn hình</p>
                        <p className="Details-compare Screen-features-title">Tính năng màn hình</p>
                    </div>
                    <div className="Block Block-Performance-Title">
                        <p className="Details-compare Performance-chipset-title">Chipset</p>
                        <p className="Details-compare Performance-RAM-title">Dung lượng RAM</p>
                        <p className="Details-compare Performance-Storage-title">Bộ nhớ trong</p>
                        <p className="Details-compare Performance-Battery-title">Pin</p>
                    </div>
                    <div className="Block Block-More-Title">
                        <p className="Details-compare More-Camera-Front-title">Camera Sau</p>
                        <p className="Details-compare More-Camera-Back-title">Camera trước</p>
                        <p className="Details-compare More-SIM-title">Thẻ SIM</p>
                        <p className="Details-compare More-System-title">Hệ điều hành</p>
                    </div>
                </div>
            </div>
            <div className="Product-Compare-Right">
                <div className="Box-Product">
                    <div className="Block Block-Product">
                        <img src={iphoneCompare} alt="" />
                        <p className="Title-Compare">Iphone 15</p>
                        <p className="Price-Compare">
                            <span className="New-Price">599$</span>
                            <span className="Old-Price">499$</span>
                        </p>
                    </div>
                    <div className="Block Block-Product-Screen">
                        <p className="Details-compare Screen-size">6.1 inches</p>
                        <p className="Details-compare Screen-technology">Super Retina XDR OLED</p>
                        <p className="Details-compare Screen-features">460 ppi, HDR display, Lớp phủ oleophobic chống bám vân tay</p>
                    </div>
                    <div className="Block Block-Product-Performance">
                        <p className="Details-compare Performance-chipset">Apple A15</p>
                        <p className="Details-compare Performance-RAM">4 GB</p>
                        <p className="Details-compare Performance-Storage">128 GB</p>
                        <p className="Details-compare Performance-Battery">3240mAh</p>
                    </div>
                    <div className="Block Block-Product-More">
                        <p className="Details-compare More-Camera-Front">12MP, f/1.6</p>
                        <p className="Details-compare More-Camera-Back">12MP, f/2.2</p>
                        <p className="Details-compare More-SIM">2 SIM (nano‑SIM và eSIM)</p>
                        <p className="Details-compare More-System">iOS 15</p>
                    </div>
                    <button className="btn-compare">Buy now</button>
                </div>
                <div className="Box-Product">
                    <div className="Block Block-Product">
                        <img src={iphoneCompare} alt="" />
                        <p className="Title-Compare">Iphone 15</p>
                        <p className="Price-Compare">
                            <span className="New-Price">599$</span>
                            <span className="Old-Price">499$</span>
                        </p>
                    </div>
                    <div className="Block Block-Product-Screen">
                        <p className="Details-compare Screen-size">6.1 inches</p>
                        <p className="Details-compare Screen-technology">Super Retina XDR OLED</p>
                        <p className="Details-compare Screen-features">460 ppi, HDR display, Lớp phủ oleophobic chống bám vân tay</p>
                    </div>
                    <div className="Block Block-Product-Performance">
                        <p className="Details-compare Performance-chipset">Apple A15</p>
                        <p className="Details-compare Performance-RAM">4 GB</p>
                        <p className="Details-compare Performance-Storage">128 GB</p>
                        <p className="Details-compare Performance-Battery">3240mAh</p>
                    </div>
                    <div className="Block Block-Product-More">
                        <p className="Details-compare More-Camera-Front">12MP, f/1.6</p>
                        <p className="Details-compare More-Camera-Back">12MP, f/2.2</p>
                        <p className="Details-compare More-SIM">2 SIM (nano‑SIM và eSIM)</p>
                        <p className="Details-compare More-System">iOS 15</p>
                    </div>
                    <button className="btn-compare">Buy now</button>
                </div>
                <div className="Box-Product">
                    <div className="Block Block-Product">
                        <img src={iphoneCompare} alt="" />
                        <p className="Title-Compare">Iphone 15</p>
                        <p className="Price-Compare">
                            <span className="New-Price">599$</span>
                            <span className="Old-Price">499$</span>
                        </p>
                    </div>
                    <div className="Block Block-Product-Screen">
                        <p className="Details-compare Screen-size">6.1 inches</p>
                        <p className="Details-compare Screen-technology">Super Retina XDR OLED</p>
                        <p className="Details-compare Screen-features">460 ppi, HDR display, Lớp phủ oleophobic chống bám vân tay</p>
                    </div>
                    <div className="Block Block-Product-Performance">
                        <p className="Details-compare Performance-chipset">Apple A15</p>
                        <p className="Details-compare Performance-RAM">4 GB</p>
                        <p className="Details-compare Performance-Storage">128 GB</p>
                        <p className="Details-compare Performance-Battery">3240mAh</p>
                    </div>
                    <div className="Block Block-Product-More">
                        <p className="Details-compare More-Camera-Front">12MP, f/1.6</p>
                        <p className="Details-compare More-Camera-Back">12MP, f/2.2</p>
                        <p className="Details-compare More-SIM">2 SIM (nano‑SIM và eSIM)</p>
                        <p className="Details-compare More-System">iOS 15</p>
                    </div>
                    <button className="btn-compare">Buy now</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCompare