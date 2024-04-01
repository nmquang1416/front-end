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
                <li className="footer-link">Call to buy<a href="/"> 1800 1900</a></li>
                <li className="footer-link"><a href="/">Chamsockhachhang@cellinfo.com</a></li>
                <li className="footer-link">Detech Tower, 8a Ton That Huyet</li>
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
