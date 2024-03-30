import React from 'react'
import './ContactUs.css'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import Banner_section from '../Assets/Img/banner-section.png'
const ContactUs = () => {
  return (
    <div className='Contact-Us'>
        <Breadcrumbs page="Contact-Us" />
        <div className="Container-Contact">
            <div className="Container-Contact-Left">
                <form action="">
                    <label htmlFor="name" className='label-contact' >Name</label>
                    <input type="text" className="input" id='name' placeholder='Nguyen Minh Quang' required/>
                    <label htmlFor="company" className='label-contact'>Company</label>
                    <input type="text" className="input" id='name' placeholder='Compay Name...' required/>
                    <label htmlFor="phone" className='label-contact'>Phone</label>
                    <input type="text" className="input" id='phone' placeholder='0123 456 789... required'/>
                    <label htmlFor="email" className='label-contact'>Email</label>
                    <input type="text" className="input" id='email' placeholder='Email...'  required/>
                    <label htmlFor="note" className='label-contact'>Note</label>
                    <textarea name="note" id="note" className="input" placeholder='Note...' ></textarea>
                </form>
            </div>
            <div className="Container-Contact-Right">
                <p className="title">Contact Us</p>
                <p className="sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <button className='btn'> Send</button>
            </div>
        </div>
    </div>
  )
}

export default ContactUs
