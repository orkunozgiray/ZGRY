import React from 'react';
import Footer from '../components/Footer';
import MenP from '../components/Men';
import { MenObjOne, MenObjTwo, MenObjThree, MenObjFour } from '../components/Men/Data';


const MenPage = () => {
    return (
        <>

            <MenP {...MenObjOne}/>
            <MenP {...MenObjTwo}/>
            <MenP {...MenObjThree}/>
            <MenP {...MenObjFour}/>
            <Footer />       
        </>
    );
}

export default MenPage;
