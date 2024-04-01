import React from 'react'
import './ProductCompare.css'
import iphoneCompare from '../Assets/Img/iphone-conpare.png';
import compare_2 from '../Assets/Img/Compare/compare_2.png';
import Compare_3 from '../Assets/Img/Compare/compare_3.png';
import { Link } from 'react-router-dom';

const ProductCompare = () => {
    return (
        
        <div className='Content-Product-Compare'>
            <div className="Box-Compare">
                <div className="Block-null"></div>
                <Link to="/ProductOfCellinfo/1"><div className="Block-product">
                    <img src={iphoneCompare} alt="" />
                    <p className="title">iPhone 13 128GB</p>
                    <span className='Price PriceNew'>599$</span>
                    <span className='Price PriceOld'>499$</span>
                </div></Link>
                <Link to="/ProductOfCellinfo/3">
                <div className="Block-product">
                    <img src={compare_2} alt="" />
                    <p className="title">Samsung galxy s24</p>
                    <span className='Price PriceNew'>599$</span>
                    <span className='Price PriceOld'>499$</span>
                </div>
                </Link>
                <Link to="/ProductOfCellinfo/4">
                <div className="Block-product">
                    <img src={Compare_3} alt="" />
                    <p className="title">Xiaomi redmi 14</p>
                    <span className='Price PriceNew'>599$</span>
                    <span className='Price PriceOld'>499$</span>
                </div>
                </Link>
                
            </div>
            <div className="Compare-Details">
                <table className="Compare-Screen">
                    <tr className='Screen-size'>
                        <td className='details-title'>Kích thước màn hình</td>
                        <td className='details-sub-title'>6.1 inches</td>
                        <td className='details-sub-title'>6.1 inches</td>
                        <td className='details-sub-title'>6.8 inches</td>
                    </tr>
                    <tr className='Screen-technology'>
                        <td className='details-title'>Công nghệ màn hình</td>
                        <td className='details-sub-title'>Super Retina XDR OLED</td>
                        <td className='details-sub-title'>Super Retina XDR OLED</td>
                        <td className='details-sub-title'>Dynamic AMOLED 2X</td>
                    </tr>
                    <tr className='Screen-Features'>
                        <td className='details-title'>Tính năng màn hình</td>
                        <td className='details-sub-title'>460 ppi, HDR display, Lớp phủ oleophobic chống bám vân tay</td>
                        <td className='details-sub-title'>460 ppi, HDR display, Lớp phủ oleophobic chống bám vân tay</td>
                        <td className='details-sub-title'>460 ppi, HDR display, Lớp phủ oleophobic chống bám vân tay</td>
                    </tr>
                </table>
                <table className="Compare-Performance">
                    <tr className='Chipset'>
                        <td className='details-title'>Chipset</td>
                        <td className='details-sub-title'>Apple A15</td>
                        <td className='details-sub-title'>Apple A16 Bionic 6 nhân</td>
                        <td className='details-sub-title'>Snapdragon 8 Gen 2 (4 nm)</td>
                    </tr>
                    <tr className='RAM'>
                        <td className='details-title'>Dung lượng RAM</td>
                        <td className='details-sub-title'>4 GB</td>
                        <td className='details-sub-title'>6 GB</td>
                        <td className='details-sub-title'>8 GB</td>
                    </tr>
                    <tr className='Storage'>
                        <td className='details-title'>Bộ nhớ trong</td>
                        <td className='details-sub-title'>128 GB</td>
                        <td className='details-sub-title'>128 GB</td>
                        <td className='details-sub-title'>256 GB</td>
                    </tr>
                    <tr className='Battery'>
                        <td className='details-title'>Pin</td>
                        <td className='details-sub-title'>3240mAh</td>
                        <td className='details-sub-title'>3240mAh</td>
                        <td className='details-sub-title'>5000mAh</td>
                    </tr>
                </table>
                <table className="Compare-More">
                    <tr className="Camera-front">
                        <td className='details-title'>Camera Sau</td>
                        <td className='details-sub-title'>12MP, f/1.6</td>
                        <td className='details-sub-title'>48MP, 26 mm, ƒ/1.6</td>
                        <td className='details-sub-title'>12MP F2.2 (Dual Pixel AF)</td>
                    </tr>
                    <tr className="Camera-back">
                        <td className='details-title'>Camera Sau</td>
                        <td className='details-sub-title'>12MP, f/2.2</td>
                        <td className='details-sub-title'>12MP, ƒ/1.9</td>
                        <td className='details-sub-title'>12MP F2.2 (Dual Pixel AF)</td>
                    </tr>
                    <tr className="SIM">
                        <td className='details-title'>Thẻ SIM</td>
                        <td className='details-sub-title'>2 SIM (nano‑SIM và eSIM)</td>
                        <td className='details-sub-title'>2 SIM (nano‑SIM và eSIM)</td>
                        <td className='details-sub-title'>2 SIM (nano‑SIM và eSIM)</td>
                    </tr>
                    <tr className="System">
                        <td className='details-title'>Hệ điều hành</td>
                        <td className='details-sub-title'>iOS 15</td>
                        <td className='details-sub-title'>iOS 17</td>
                        <td className='details-sub-title'>Android</td>
                    </tr>
                </table>
                <table className="Compare-Button">
                    <tr className="Button-buy">
                        <td className='details-title'></td>
                        <Link to="/ProductOfCellinfo"><td className='details-sub-title'><button>Buy now</button></td></Link>
                        <Link to="/ProductOfCellinfo"><td className='details-sub-title'><button>Buy now</button></td></Link>
                        <Link to="/ProductOfCellinfo"><td className='details-sub-title'><button>Buy now</button></td></Link>
                    </tr>
                </table>

            </div>
        </div>
    )
}

export default ProductCompare