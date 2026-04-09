import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='container py-5 bg-body-tertiary'>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <h3 className='play-fair fw-bold'>Lonely</h3>
                        <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
                    </div>
                    <div className='social-media d-flex justify-content-center align-items-center'>
                        <a href="javascript:void(0)">
                            <FaXTwitter />
                        </a>
                        <a href="javascript:void(0)">
                            <FaFacebook />
                        </a>
                        <a href="javascript:void(0)">
                            <FaInstagram />
                        </a>
                        <a href="javascript:void(0)">
                            <FaSkype />
                        </a>
                        <a href="javascript:void(0)">
                            <FaLinkedin />
                        </a>
                    </div>
                    <div className='container my-5'>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <div className='copyright'>
                                <span>Copyright</span>
                                <strong className='px-2'>Lonely</strong>
                                <span>All Rights Reserved</span>
                            </div>
                            <div className='credits'>
                                <p>Designed by <span>Maitri</span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer
