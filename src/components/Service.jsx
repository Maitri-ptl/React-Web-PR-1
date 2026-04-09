import React from 'react'
import { TbActivityHeartbeat } from "react-icons/tb";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { BsCalendar4Week } from "react-icons/bs";
import { BsBroadcast } from "react-icons/bs";
import './Service.css'

const Service = () => {
    return (
        <>
            <div className='service'>
                <div className="container">
                    <h2 className='section-title pb-4 mb-4'>Service</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <div className="container">
                    <div className="row py-5">
                        <div className="col-xl-3 col-md-6 ">
                            <div className='service-card position-relative'>
                                <div className='icon my-2'>
                                    <TbActivityHeartbeat />
                                </div>
                                <h4 className='play-fair py-2'>Lorem Ipsum </h4>
                                <p className='py-2'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className='service-card position-relative'>
                                <div className='icon my-2'>
                                    <BsBoundingBoxCircles />
                                </div>
                                <h4 className='play-fair py-2'>Sed ut perspici</h4>
                                <p className='py-2'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className='service-card position-relative'>
                                <div className='icon my-2'>
                                    <BsCalendar4Week />
                                </div>
                                <h4 className='play-fair py-2'>Magni Dolores</h4>
                                <p className='py-2'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className='service-card position-relative'>
                                <div className='icon my-2'>
                                    <BsBroadcast />
                                </div>
                                <h4 className='play-fair py-2'>Nemo Enim</h4>
                                <p className='py-2'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
