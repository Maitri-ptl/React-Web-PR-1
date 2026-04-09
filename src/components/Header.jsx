import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <>
            <div className='container-fuild'>
                <nav className="navbar navbar-expand-lg bg-white">
                    <div className="container ">
                        <a className="navbar-brand play-fair" href="javascript:void(0)">Lonely</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse d-lg-flex justify-content-end align-items-center" id="navbarNav">
                            <ul className="navbar-nav fs-6 fst-normal poppins">
                                <li className="nav-item">
                                    <a className="nav-link px-3 py-4 active" aria-current="page" href="javascript:void(0)">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-3 py-4" href="javascript:void(0)">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-3 py-4" href="javascript:void(0)">Service</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-3 py-4" href="javascript:void(0)">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-3 py-4" href="javascript:void(0)">Testimonial</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link px-3 py-4 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link px-3 py-4" href="javascript:void(0)">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header
