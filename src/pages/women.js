import React from 'react';
import Footer from '../components/Footer';
import WomenP from '../components/Women';
import { womenObjOne, womenObjTwo, womenObjThree, womenObjFour } from '../components/Women/Data';

const WomenPage = () => {
    return (
        <>
            <WomenP {...womenObjOne}/>
            <WomenP {...womenObjTwo}/>
            <WomenP {...womenObjThree}/>
            <WomenP {...womenObjFour}/>
            <Footer />
        </>
    );
};

export default WomenPage;
