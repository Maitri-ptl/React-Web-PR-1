import React from 'react'
import profile from '../assets/profile-img.jpg'
import { MdKeyboardArrowRight } from "react-icons/md";
import './About.css'

const About = () => {
    return (
        <>
            <section className='about'>
                <div className='container my-5'>
                    <h2 className='play-fair pb-4 mb-4 section-title'>About</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <div className="container">
                    <div className="row" data-aos="fade-right">
                        <div className="col-lg-4">
                            <img src={profile} alt="" className='img-fluid' />
                        </div>
                        <div className="col-lg-8">
                            <div className='content'>
                                <h2 className='play-fair fw-bold'>UI/UX Designer & Web Developer.</h2>
                                <p className='fst-italic py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="row" data-aos="fage-left" >
                                <div className="col-lg-6">
                                    <ul className='list-unstyled mb-3'>
                                        <li>
                                            <MdKeyboardArrowRight style={{color:"var(--accent-color)",marginRight:"5px"}}/>
                                            <strong className='text-secondary me-2'>Birthday:</strong>
                                            <span className='text-secondary'>1 May 1995</span>
                                        </li>
                                        <li>
                                            <MdKeyboardArrowRight style={{color:"var(--accent-color)",marginRight:"5px"}}/>
                                            <strong className='text-secondary me-2'>Website:</strong>
                                            <span className='text-secondary'>www.example.com</span>
                                        </li>
                                        <li>
                                            <MdKeyboardArrowRight style={{color:"var(--accent-color)",marginRight:"5px"}}/>
                                            <strong className='text-secondary me-2'>Phone:</strong>
                                            <span className='text-secondary'>+123 456 7890</span>
                                        </li>
                                        <li>
                                            <MdKeyboardArrowRight style={{color:"var(--accent-color)",marginRight:"5px"}}/>
                                            <strong className='text-secondary me-2'>City:</strong>
                                            <span className='text-secondary'>New York,USA</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6"> 
                                    <ul className='list-unstyled mb-3'>
                                        <li>
                                            <MdKeyboardArrowRight style={{color:"var(--accent-color)",marginRight:"5px"}}/>
                                            <strong className='text-secondary me-2'>Age:</strong>
                                            <span className='text-secondary'>30</span>
                                        </li>
                                        <li>
                                            <MdKeyboardArrowRight style={{color:"var(--accent-color)",marginRight:"5px"}}/>
                                            <strong className='text-secondary me-2'>Degree:</strong>
                                            <span className='text-secondary'>Master</span>
                                        </li>
                                        <li>
                                            <MdKeyboardArrowRight style={{color:"var(--accent-color)",marginRight:"5px"}}/>
                                            <strong className='text-secondary me-2'>Email:</strong>
                                            <span className='text-secondary'>email@example.com</span>
                                        </li>
                                        <li>
                                            <MdKeyboardArrowRight style={{color:"var(--accent-color)",marginRight:"5px"}}/>
                                            <strong className='text-secondary me-2'>Freelance:</strong>
                                            <span className='text-secondary'>Available</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className='py-3 text-secondary'>
                                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                                Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
