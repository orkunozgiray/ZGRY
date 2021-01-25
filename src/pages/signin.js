import React, { useState } from 'react';
import ScrollToTop from '../components/ScrollToTop';
import SignIn from '../components/SignIn';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const SignInPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/> 
            <ScrollToTop />
            <SignIn />
        </>
    );
}

export default SignInPage;
