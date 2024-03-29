import React, { useState } from 'react'
import img_large from '../Assets/Img/img-large.png'
import img_small from '../Assets/Img/img-small.png'
import './ProductDetails_Info.css'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { useParams } from 'react-router-dom';
import all_product_cellinfo from '../Assets/DataofCellinfo/all_product_cellinfo';

import { GetId } from "../ProductDisplay/ProductDisplay";

import General_info from './General_info'
import Performance_info from './Performance_info'
import Question from './Question'




const ProductDetails_Info = (props) => {
    const { id } = useParams(); // param
    const [product, setProduct] = useState(null);

    React.useEffect(() => { //useEffect để ưu tiên chạy lần lượt từng hàm
        getData()///step 1

    }, [])

    const getData = () => {
        setTimeout(() => {
            const product_info = all_product_cellinfo.filter((item, index) => {
                return item.id == id;
            })
            console.log(product_info[0].categories)//in ra cái product_info với giá trị khởi tạo là 0 .categories để lấy ra thông tin categories
            getDataRealationProduct()//Lấy sản phẩm liên quan
            setProduct(product_info[0])
        }, 1000)

    }
    const getDataRealationProduct = () => {

    }
    return (
        <div>{product ? (<div>
            <div className='ProductDetails'>
                {/* <div>
                    <p>now {id}</p>
                </div> */}
                

                <div className='ProductDetails_Info'>
                    <div className="Details-info-left">
                        <img src={img_large} alt="" />
                        <div className="more-img">
                            <img src={product.img_small_1} alt="" />
                            <img src={product.img_small_2} alt="" />
                            <img src={product.img_small_3} alt="" />
                            <img src={product.img_small_4} alt="" />
                        </div>
                    </div>
                    <div className="Details-info-right">
                        <p className="title">{product.name}</p>
                        <p className="sub-title">
                            {product.Description}
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
                            <Link to="/Compare"><button className='btn-high-emphasis Compare'>Compare</button></Link>
                            <button className='btn-high-emphasis Download'>Download Doc</button>
                            <button className='btn-low-emphasis Order'>Order</button>
                        </div>
                    </div>
                </div>
                <div className="ProductDetails_More">
                    <div className="nav-phone-info">
                        <Link to={"/ProductOfCellinfo/" + product.id +"/General"}><div className="phone-info-items General">General</div></Link>
                        <Link to={"/ProductOfCellinfo/" + props.id +"/Performance"}><div className="phone-info-items Performance">Performance</div></Link>
                        <Link to={"/ProductOfCellinfo/" + props.id +"/Question"}><div className="phone-info-items Performance">Question</div></Link>
                    </div>
                    <div className="iphone-info-details">
                        <General_info/>
                    </div>
                </div>
            </div>

        </div>) : (<div>
            Loading...
        </div>)}</div>

    )
}
export default ProductDetails_Info