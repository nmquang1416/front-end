import React from 'react'
import logo_white from '../Assets/Img/logo-white 1.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo_white} alt="" />
      </div>
      <div className="footer-content">
        <div className="Contact-infmation">
            <p>Contact infomation</p>
            <ul>
                <li className="footer-link">Call to buy<a href="tel: 0846 262 588"> 1800 1900</a></li>
                <li className="footer-link"><a href="mailto:chamsockhanhhang@cellinfo.com">Chamsockhachhang@cellinfo.com</a></li>
                <li className="footer-link"> <a href="https://www.google.com/maps/place/8a+T%C3%B4n+Th%E1%BA%A5t+Thuy%E1%BA%BFt,+M%E1%BB%B9+%C4%90%C3%ACnh,+C%E1%BA%A7u+Gi%E1%BA%A5y,+H%C3%A0+N%E1%BB%99i+100000,+Vi%E1%BB%87t+Nam/@21.0288015,105.7797143,17z/data=!3m1!4b1!4m6!3m5!1s0x313454b32b842a37:0xe91a56573e7f9a11!8m2!3d21.0288015!4d105.7822892!16s%2Fg%2F11hz0g55hn?entry=ttu">Detech Tower, 8a Ton That Huyet</a></li>
            </ul>
        </div>
        <div className="Policy">
            <p>Policy</p>
            <ul>
                <li className="footer-link"><a href="http://localhost:3000/Service">Buy and pay online</a></li>
                <li className="footer-link"><a href="http://localhost:3000/Service">Warranty Policy</a></li>
                <li className="footer-link"><a href="http://localhost:3000/Service">Purchase payment information</a></li>
            </ul>
        </div>
        <div className="Social-network">
            <p>Social Network</p>
            <ul>
                <li className="footer-link"><a href="https://www.facebook.com/"><i class="bi bi-facebook"></i></a></li>
                <li className="footer-link"><a href="https://twitter.com/"><i class="bi bi-twitter"></i></a></li>
                <li className="footer-link"><a href="https://github.com/"><i class="bi bi-github"></i></a></li>
            </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer
