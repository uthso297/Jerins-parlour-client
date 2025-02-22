import { useState } from 'react';
import img1 from '../../../assets/icons/Group 1373.png';

const Services = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleActive = (index) => {
        setActiveIndex(index);
    };

    const services = [
        {
            title: 'Anti Age Face Treatment',
            price: '$199',
            description: 'We craft stunning and amazing web UI, using a well-drafted UX to fit your product.',
            img: img1,
        },
        {
            title: 'Anti Age Face Treatment',
            price: '$199',
            description: 'We craft stunning and amazing web UI, using a well-drafted UX to fit your product.',
            img: img1,
        },
        {
            title: 'Anti Age Face Treatment',
            price: '$199',
            description: 'We craft stunning and amazing web UI, using a well-drafted UX to fit your product.',
            img: img1,
        },
    ];

    return (
        <div className="pt-20 pb-10 space-y-10">
            <h1 className="text-center font-bold text-2xl">
                Our Awesome <span className="text-[#F63E7B]">Services</span>
            </h1>
            <div className="flex lg:flex-row flex-col items-center justify-between gap-3 cursor-pointer">
                {services.map((service, index) => (
                    <div
                        key={index}
                        onClick={() => handleActive(index)} 
                        className={`space-y-2 ${activeIndex === index ? 'shadow-2xl rounded-lg py-10' : ''}`}
                    >
                        <img className="w-20 h-20 mx-auto" src={service.img} alt={service.title} />
                        <h1 className="font-bold text-center">{service.title}</h1>
                        <p className="text-[#F63E7B] font-semibold text-center">{service.price}</p>
                        <p className="text-center w-[60%] mx-auto opacity-70">{service.description}</p>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center">
                <button className="px-11 py-3 bg-[#F63E7B] rounded-lg text-white mx-auto">
                    Explore More
                </button>
            </div>
        </div>
    );
};

export default Services;
