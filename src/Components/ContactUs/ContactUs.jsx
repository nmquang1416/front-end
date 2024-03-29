import React from 'react'

const ContactUs = () => {
  return (
    <div className='Contact-Us'>
        <div className="Container-Contact">
            <div className="Container-Contact-Left">
                <form action="">
                    <label htmlFor="name" className='label-contact'>Name</label>
                    <input type="text" className="input" id='name' />
                    <label htmlFor="company" className='label-contact'>Company</label>
                    <input type="text" className="input" id='name' />
                    <label htmlFor="phone" className='label-contact'>Phone</label>
                    <input type="text" className="input" id='phone' />
                    <label htmlFor="email" className='label-contact'>Email</label>
                    <input type="text" className="input" id='email' />
                </form>
            </div>
            <div className="Container-Contact-Right">

            </div>
        </div>
    </div>
  )
}

export default ContactUs
