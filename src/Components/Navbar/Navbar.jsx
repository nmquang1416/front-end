import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/Img/logo-Ci.png';

const Navbar = () => {

    const [menu,setMenu] = useState("Home")
    

    return (
        <div className="container-nav">
            <div className='navbar'>
                <div className='nav-logo'>
                    <img src={logo} alt="logo-cellinfo" />
                </div>
                <ul className='nav-menu'>
                    <li onClick = {() => {setMenu("Home")}}>Home{menu==="Home"?<hr/>:<></>}</li>
                    <li onClick = {() => {setMenu("About us")}}>About us{menu==="About us"?<hr/>:<></>}</li>
                    <li onClick = {() => {setMenu("Product")}}>Product{menu==="Product"?<hr/>:<></>}</li>
                    <li onClick = {() => {setMenu("Service")}}>Service{menu==="Service"?<hr/>:<></>}</li>
                    <li onClick = {() => {setMenu("Compare")}}>Compare {menu==="Compare"?<hr/>:<></>}</li>
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