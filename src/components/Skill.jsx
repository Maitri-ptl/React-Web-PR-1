import React from 'react'
import './Skill.css'

const Skill = () => {
    return (
        <>
            <section className='skill py-5'>
                <div className="container">
                    <h2 className='section-title pb-4 mb-4'>Skills</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className='progess'>
                                <ul className='list-unstyled d-flex justify-content-between ps-0 mb-2'>
                                    <li className='play-fair fs-small fw-medium '>HTML</li>
                                    <li className='play-fair fs-small fw-medium'>100%</li>
                                </ul>
                                <div className="progress rounded-0 mb-4">
                                    <div className="progress-bar" style={{ width: '100%' }} />
                                </div>
                                <ul className='list-unstyled d-flex justify-content-between ps-0 mb-2'>
                                    <li className='play-fair fs-small fw-medium '>CSS</li>
                                    <li className='play-fair fs-small fw-medium'>90%</li>
                                </ul>
                                <div className="progress rounded-0 mb-4">
                                    <div className="progress-bar" style={{ width: '90%' }} />
                                </div>
                                <ul className='list-unstyled d-flex justify-content-between ps-0 mb-2'>
                                    <li className='play-fair fs-small fw-medium '>JAVASCRIPT</li>
                                    <li className='play-fair fs-small fw-medium'>75%</li>
                                </ul>
                                <div className="progress rounded-0 mb-4">
                                    <div className="progress-bar" style={{ width: '75%' }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className='list-unstyled d-flex justify-content-between ps-0 mb-2'>
                                <li className='play-fair fs-small fw-medium '>PHP</li>
                                <li className='play-fair fs-small fw-medium'>80%</li>
                            </ul>
                            <div className="progress rounded-0 mb-4">
                                <div className="progress-bar" style={{ width: '80%' }} />
                            </div>
                            <ul className='list-unstyled d-flex justify-content-between ps-0 mb-2'>
                                <li className='play-fair fs-small fw-medium '>WORDPRESS/CMS</li>
                                <li className='play-fair fs-small fw-medium'>90%</li>
                            </ul>
                            <div className="progress rounded-0 mb-4">
                                <div className="progress-bar" style={{ width: '90%' }} />
                            </div>
                            <ul className='list-unstyled d-flex justify-content-between ps-0 mb-2'>
                                <li className='play-fair fs-small fw-medium '>PHOTOSHOP</li>
                                <li className='play-fair fs-small fw-medium'>55%</li>
                            </ul>
                            <div className="progress rounded-0 mb-4">
                                <div className="progress-bar" style={{ width: '55%' }} />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skill
