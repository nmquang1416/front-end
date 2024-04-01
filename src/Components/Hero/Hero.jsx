import React from 'react'
import './Hero.css';
import background_hero from '../Assets/Img/Banner-hero-3.png';
import iphone15 from '../Assets/Img/Iphone.png';
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
        <div className='hero' style={{ backgroundImage: `url(${background_hero})`}}>
            <div className="hero-content">
                <div className="hero-left">
                    <h2 className='hero-title'>IPHONE 14 PRO VIP</h2>
                    <p className="sub-title">What lies beyond a traditional smartphone? Let's find out. This is iPhone 14 Pro.</p>
                    <Link to="/ProductOfCellinfo/9"><button>View more</button></Link>
                </div>
                <div className="hero-right">
                    <img src={iphone15} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero;




