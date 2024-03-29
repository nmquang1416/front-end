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
                    <Link to="/"><img src={logo} alt="logo-cellinfo" /></Link>
                </div>
                <ul className='nav-menu'>
                    <Link to="/"><li onClick = {() => {setMenu("Home")}}>Home{menu==="Home"?<hr/>:<></>}</li></Link>
                    <Link to="/AboutUs"> <li onClick = {() => {setMenu("About us")}}>About us{menu==="About us"?<hr/>:<></>}</li></Link>
                    <Link to="/ProductOfCellinfo"> <li onClick = {() => {setMenu("Product")}}>Product{menu==="Product"?<hr/>:<></>}</li></Link>
                    <Link to="/Service"> <li onClick = {() => {setMenu("Service")}}>Service{menu==="Service"?<hr/>:<></>}</li></Link>
                    <Link to="/Compare"><li onClick = {() => {setMenu("Compare")}}>Compare{menu==="Compare"?<hr/>:<></>}</li></Link>
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