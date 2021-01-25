import React from 'react';
import MagazineP from '../components/Blog/Magazine';
import { magObjOne } from '../components/Blog/Magazine/Data';
import { magObjTwo } from '../components/Blog/Magazine/Data';
import { magObjThree } from '../components/Blog/Magazine/Data';
import { magObjFour } from '../components/Blog/Magazine/Data';
import Footer from '../components/Footer';

const MagazinePage = () => {
    return (
        <>
            {/* <Sidebar /> */}
            {/* <Navbar /> */}
            <MagazineP {...magObjOne}/>
            <MagazineP {...magObjTwo}/>
            <MagazineP {...magObjThree}/>
            <MagazineP {...magObjFour}/>
            <Footer />
        </>
    );
};

export default MagazinePage;

