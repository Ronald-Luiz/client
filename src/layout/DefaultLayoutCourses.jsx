import React from 'react';
import Header from '../components/Header';
import Nav from '../components/CustomNav/index.jsx';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

// import Capa from '../assets/capa.png';
// import Capa2 from '../assets/capa2.png';

export default function DefaultCourses() {


    return (
        <>
            {/* <Header /> */}
            <Nav />
            {/* <CustomComponent /> */}
            <Outlet />
            <Footer />
        </>
    );
}
