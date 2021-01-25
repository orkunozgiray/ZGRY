import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import { homeObjTwo } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Team from '../components/Team';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Blog from '../components/Blog';
import { blogObjOne } from '../components/Blog/Data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/> 
          <HeroSection /> 
          <InfoSection {...homeObjOne}/>
          <InfoSection {...homeObjTwo}/>
          <Blog {...blogObjOne}/>
          <Team />
          <ContactUs />
          <Footer />
        </>
    );
};

export default Home;
