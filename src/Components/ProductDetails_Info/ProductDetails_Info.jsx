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

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import all_data_details from '../Assets/DataofCellinfo/all_data_details';


const ProductDetails_Info = (props) => {
    //-------------------------------------------------------------------------//// Khoi va trinh

    

    //-------------------------------------------------------------------------////
    
    const { id } = useParams(); //  gắn biến id bằng với id sản phẩm
    const [product, setProduct] = useState(null);

    React.useEffect(() => { //useEffect để ưu tiên chạy lần lượt từng hàm
        getData()///step 1

    }, [])

    const getData = () => { //hàm lấy dữ liệu
        setTimeout(() => { // set delay
            const product_info = all_data_details.filter((item, index) => { //fillter tìm ra giá trị trong mảng có id bằng với id sản phẩm
                return item.id == id;
            })
            console.log(product_info[0].categories)//in ra cái product_info với giá trị khởi tạo là 0 .categories để lấy ra thông tin categories
            getDataRealationProduct()//Lấy sản phẩm liên quan
            setProduct(product_info[0])
        }, 1000)

    }


    // const test = all_product_cellinfo.find((item)=>item.id === Number(id))
    // console.log(test)


    const getDataRealationProduct = () => {

    }
    return (
        //Bắt đầu load dữ liệu
        <div>{product ? (<div>
            <div className='ProductDetails'>
                {/* <div>
                    <p>now {id}</p>
                </div> */}
                <Breadcrumbs page="Product" name={product.name} />
                <div className='ProductDetails_Info'>
                    <div className="Details-info-left">
                        <img src={product.img_large} alt="" />
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
                            {product.des}
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
                        <div className="phone-info-items General">General</div>
                        <div className="phone-info-items Performance">Performance</div>
                        <div className="phone-info-items Performance">Question</div>
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