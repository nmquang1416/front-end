import React from 'react'
import './ContactUs.css'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import Banner_section from '../Assets/Img/banner-section.png'

import bg_3 from '../Assets/Img/bg3.png';
const ContactUs = () => {
    return (
        <div className='Contact-Us'>
            <div className="banner-section" style={{ backgroundImage: `url(${Banner_section})` }}>
                <div className="section-title">
                    <h1>Contact us - Cellinfo.com</h1>
                </div>
            </div>
            <Breadcrumbs page="Contact-Us" />

            <div className="Container-Contact">
                <form action="action.php" id='form'>
                    <div className="Container-Contact-Left">
                        <label htmlFor="name" className='label-contact' >Name</label>
                        <input type="text" className="input" id='name' typeof='text' minLength={3} maxLength={20} placeholder='Nguyen Minh Quang' required />

                        <label htmlFor="company" className='label-contact'>Company</label>
                        <input type="text" className="input" id='name' typeof='text' minLength={3} placeholder='Compay Name...' required />

                        <label htmlFor="phone" className='label-contact'  >Phone</label>
                        <input type="text" className="input" id='phone' placeholder='0123 456 789... ' typeof='number' pattern="[-+]?[0-9]" minLength={10} required />

                        <label htmlFor="email" className='label-contact'>Email</label>
                        <input type="text" className="input" id='email' placeholder='Email...' pattern='^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$' title='The domain portion of the email address is invalid (the portion after the @).' typeof='email' required />

                        <label htmlFor="note" className='label-contact'>Note</label>
                        <textarea name="note" id="note" className="input" placeholder='Note...' ></textarea>

                    </div>
                    <div className="Container-Contact-Right" style={{ backgroundImage: `url(${bg_3})` }} >
                        <p className="title">Contact Us</p>
                        <p className="sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        <button className='btn'> Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactUs
