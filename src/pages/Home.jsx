import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import { RiSkipRightLine } from 'react-icons/ri'
import Skill from '../components/Skill'
import Service from '../components/Service'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Resume from '../components/Resume'
import Portfolio from '../components/Portfolio'

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Hero/>
                <About/>
                <Skill/>
                <Resume/>
                <Service/>
                <Portfolio/>
                <Contact/>
            </main>
            <Footer/>
        </>
    )
}

export default Home
