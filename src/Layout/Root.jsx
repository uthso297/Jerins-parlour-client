import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Root = () => {
    return (
        <div className='poppins-regular'>
            <div className='lg:px-32 px-3 bg-[#FFF8F5]'><Navbar></Navbar></div>
            <div className=''><Outlet></Outlet></div>
            <div className='lg:px-32 px-3 bg-[#F63E7B]'> <Footer></Footer> </div>
        </div>
    );
};

export default Root;