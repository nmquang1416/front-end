import React from 'react'
import './Hero.css';
import background_hero from '../Assets/Img/Banner-hero-3.png';
import iphone15 from '../Assets/Img/Iphone.png';


const Hero = () => {
    return (
        <div className='hero' style={{ backgroundImage: `url(${background_hero})`}}>
            <div className="hero-content">
                <div className="hero-left">
                    <h2 className='hero-title'>IPHONE 15 PRO VIP</h2>
                    <p className="sub-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button>View more</button>
                </div>
                <div className="hero-right">
                    <img src={iphone15} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero;




