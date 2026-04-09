
import React from 'react'
import './Resume.css'

const Resume = () => {
    return (
        <>
            <section className='resume'>
                <div className='container'>
                    <div className='resume-content'>
                        <h1 className="play-fair fs-2 fw-bold pb-4 mb-4 section-title" data-aos="fade-up" data-aos-duration="1000">Resume</h1>
                        <p className='mb-4 pb-4' data-aos="fade-up" data-aos-duration="1000">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                        <div className='row'>
                            <div className='col-md-6' data-aos="fade-up" data-aos-duration="1000">
                                <div className='summary'>
                                    <h4 className='play-fair fw-bold'>Summary</h4>
                                    <div className='summary-content ps-4 text-secondary my-3'>
                                        <p className='play-fair text-uppercase mb-2 fw-semibold'>Brandon Johnson</p>
                                        <p className='fst-italic'>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.
                                        </p>
                                        <ul>
                                            <li className='my-3'>Portland par 127,Orlando, FL</li>
                                            <li className='my-3'>(123) 456-7891</li>
                                            <li className='my-3'>bhumi.kanjani@example.com</li>
                                        </ul>
                                    </div>
                                    <h4 className='play-fair my-3 fw-bold'>Education</h4>
                                    <div className='summary-content ps-4 text-secondary'>
                                        <h6 className='text-uppercase play-fair'>Master of Fine Arts & Graphic Design</h6>
                                        <p className='play-fair year ps-3'>2015 - 2016</p>
                                        <p className='fst-italic'>
                                            Rochester Institute of Technology, Rochester, NY
                                        </p>
                                        <p className='mb-0 pb-4'>
                                            Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend
                                        </p>
                                    </div>
                                    <div className='summary-content ps-4 text-secondary'>
                                        <h6 className='text-uppercase play-fair'>
                                            Bachelor of Fine Arts & Graphic Design
                                        </h6>
                                        <p className='play-fair year ps-3'>2010 - 2014</p>
                                        <p className='fst-italic'>
                                            Rochester Institute of Technology, Rochester, NY
                                        </p>
                                        <p>
                                            Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6' data-aos="fade-up" data-aos-duration="1000">
                                <div className='summary'>
                                    <h4 className='play-fair fw-bold'>Professional Experince</h4>
                                    <div className='summary-content ps-4 text-secondary'>
                                        <p className='play-fair text-uppercase mb-2 fw-semibold'>
                                            Senior graphic design specialist
                                        </p>
                                        <p className='play-fair year ps-3'>2019 - Present</p>
                                        <p className='fst-italic'>
                                            Experion, New York, NY
                                        </p>

                                        <ul className='mb-0 pb-3'>
                                            <li className='my-3'>
                                                Lead in the design, development, and implementation of the graphic, layout, and production communication materials
                                            </li>
                                            <li className='my-3'>
                                                Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.
                                            </li>
                                            <li className='my-3'>
                                                Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design

                                            </li>
                                            <li className='py-3'>
                                                Oversee the efficient use of production project budgets ranging from $2,000 - $25,000
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='summary-content ps-4 text-secondary'>
                                        <p className='play-fair text-uppercase mb-2 fw-semibold'>
                                            Graphic design specialist
                                        </p>
                                        <p className='play-fair year ps-3'>2017 - 2018</p>
                                        <p className='fst-italic'>
                                            Stepping Stone Advertising, New York, NY
                                        </p>
                                        <ul>
                                            <li className='my-2'>
                                                Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).
                                            </li>
                                            <li className='my-2'>
                                                Managed up to 5 projects or tasks at a given time while under pressure
                                            </li>
                                            <li className='my-2'>
                                                Recommended and consulted with clients on the most appropriate graphic design
                                            </li>
                                            <li className='my-2'>
                                                Created 4+ design presentations and proposals a month for clients and account managers
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume
