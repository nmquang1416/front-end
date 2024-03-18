import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/Img/logo-Ci.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu,setMenu] = useState("Home")
    

    return (
        <div className="container-nav">
            <div className='navbar'>
                <div className='nav-logo'>
                    <img src={logo} alt="logo-cellinfo" />
                </div>
                <ul className='nav-menu'>
                    <li onClick = {() => {setMenu("Home")}}><Link to="/">Home</Link>{menu==="Home"?<hr/>:<></>}</li>
                    <li onClick = {() => {setMenu("About us")}}><Link to="/About us">About us</Link>{menu==="About us"?<hr/>:<></>}</li>
                    <li onClick = {() => {setMenu("Product")}}><Link to="/Product">Product</Link>{menu==="Product"?<hr/>:<></>}</li>
                    <li onClick = {() => {setMenu("Service")}}><Link to="/Service">Service</Link>{menu==="Service"?<hr/>:<></>}</li>
                    <li onClick = {() => {setMenu("Compare")}}><Link to="/Compare">Compare</Link> {menu==="Compare"?<hr/>:<></>}</li>
                </ul>
                <div className="nav-input-search">
                    <form>
                        <input type="text" placeholder='ex:iphone 15 pro vip'/>
                        <button className='submit'>
                            <i class="bi bi-search"></i>
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Navbar;