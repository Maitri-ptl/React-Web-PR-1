import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import './Contact.css'

const Contact = () => {
  return (
    <>
      <div className='contact'>
        <div className="container">
          <h2 className='section-title pb-4 mb-4'>Contact</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <div className='container'>
          <div className="row py-5">
            <div className="col-lg-4">
              <div className='d-flex pb-4'>
                <div className='info-icon'>
                  <SlLocationPin />
                </div>
                <div>
                  <h3 className='play-fair fw-bold fs-5 mb-1'>Address</h3>
                  <p className='text-secondary fs-6'>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>
              <div className='d-flex pb-4'>
                <div className='info-icon'>
                  <FiPhone />
                </div>
                <div>
                  <h3 className='play-fair fw-bold fs-5 mb-1'>Call Us</h3>
                  <p className='text-secondary fs-6'>+1 5589 55488 55</p>
                </div>
              </div>
              <div className='d-flex'>
                <div className='info-icon'>
                  <BsEnvelope />
                </div>
                <div>
                  <h3 className='play-fair fw-bold fs-5 mb-1'>Mail</h3>
                  <p className='text-secondary fs-6'>info@example.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className='col-md-6'>
                  <input type="text" name="name" className="form-control border border-1 px-3 py-2 rounded-0" placeholder='Your name'/>
                </div>
                <div className='col-md-6'>
                  <input type="email" name="email" className="form-control border border-1 px-3 py-2 rounded-0" placeholder='Your email'/>
                </div>
              </div>
              <input type="text" className="form-control border border-1 mt-4 py-2 px-3 rounded-0" name="subject" placeholder="Subject" required />
              <textarea className="form-control border border-1 mt-4 py-2 px-3 rounded-0" name="message" rows={6} placeholder="Message" required defaultValue={""} />
              <div className='text-center'>
                <button type="submit" className='mt-4'>Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
