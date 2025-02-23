import React from 'react';
import customr from '../../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'
const HappyCustomer = () => {
    return (
        <div className='lg:flex lg:flex-row lg:justify-between gap-40 py-20 space-y-5 lg:space-y-0'>
            <div>
                <img className='lg:w-[500px] lg:h-full w-full h-full' src={customr} alt="" />
            </div>
            <div className='lg:w-[50%] flex flex-col justify-between gap-5 lg:gap-0'>
                <h1 className='lg:text-4xl text-3xl font-bold'>Let Us Handle Your <br className='hidden lg:block' /> Screen <span className='text-[#F63E7B]'>Professionally</span>. </h1>
                <p className='opacity-70 text-sm lg:w-[70%]'>With years of experience and expert techniques, we ensure your screen is repaired and restored to perfection. Trust us for quality and reliable service every time.</p>
                <div className='flex gap-10'>
                    <div>
                        <h1 className='text-[#F63E7B] text-4xl font-bold'>500+</h1>
                        <p>Happy Customer</p>
                    </div>
                    <div>
                        <h1 className='text-[#F63E7B] text-4xl font-bold'>16+</h1>
                        <p>Total Services</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HappyCustomer;