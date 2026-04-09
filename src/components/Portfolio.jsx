import React from 'react'
import img1 from '../assets/masonry-portfolio-1.jpg'
import img2 from '../assets/masonry-portfolio-2.jpg'
import img3 from '../assets/masonry-portfolio-3.jpg'
import img4 from '../assets/masonry-portfolio-4.jpg'
import img5 from '../assets/masonry-portfolio-5.jpg'
import img6 from '../assets/masonry-portfolio-6.jpg'
import img7 from '../assets/masonry-portfolio-7.jpg'
import img8 from '../assets/masonry-portfolio-8.jpg'
import img9 from '../assets/masonry-portfolio-9.jpg'
import './Portfolio.css'

const Portfolio = () => {
    return (
        <>
            <section className='portfolio'>
                <div className='container py-5'>
                    <h2 className='section-title pb-4 mb-4'>Portfolio</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <div className='container py-5'>
                    <div className="parent">
                        <div className="div1">
                            <img src={img1} alt=""  className='img-fluid'/>
                        </div>
                        <div className="div2">
                            <img src={img2} alt=""  className='img-fluid'/>
                        </div>
                        <div className="div3">
                            <img src={img3} alt=""  className='img-fluid'/>
                        </div>
                        <div className="div4">
                            <img src={img4} alt=""  className='img-fluid'/>
                        </div>
                        <div className="div5">
                            <img src={img5} alt=""  className='img-fluid'/>
                        </div>
                        <div className="div6">
                            <img src={img6} alt=""  className='img-fluid'/>
                        </div>
                        <div className="div7">
                            <img src={img7} alt=""  className='img-fluid'/>
                        </div>
                        <div className="div8">
                            <img src={img8} alt=""  className='img-fluid'/>
                        </div>
                        <div className="div9">
                            <img src={img9} alt=""  className='img-fluid'/>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Portfolio
