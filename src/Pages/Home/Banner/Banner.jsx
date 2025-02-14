import women from '../../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'
const Banner = () => {
    return (
        <div className='flex lg:flex-row flex-col items-center justify-between pb-10'>
            <div className='space-y-5'>
                <h1 className='font-bold lg:text-5xl text-3xl'>BEAUTY SALON</h1>
                <h1 className='font-bold lg:text-5xl text-3xl'>FOR EVERY WOMEN</h1>
                <p className='lg:w-1/2 opacity-70'>Welcome to Our Parlour! Relax and Unwind with Our Exclusive Services. Book Your Appointment Today!</p>
                <button className="px-11 py-3 bg-[#F63E7B] rounded-lg text-white">Get an Appoinment</button>
            </div>
            <div className='lg:mr-[10vh] mt-10 lg:mt-0'>
                <img className='h-[480px] lg:w-[500px] w-[700px] mx-auto' src={women} alt="Asian Women" />
            </div>
        </div>
    );
};

export default Banner;