import img1 from '../../../assets/icons/Group 1373.png'
const BookingList = () => {
    return (
        <div className="mt-10  ">
            <h1 className="p-4 text-xl font-bold">Service List</h1>
            <div className=" bg-[#f4f7fc] min-h-screen lg:pt-6 pl-4 lg:pl-0 grid lg:grid-cols-3 grid-cols-1">
                <div className='p-4 space-y-4 bg-white rounded-lg h-[250px] m-5'>
                    <div className='flex items-center justify-between'>

                        <div>
                            <img className='w-20 h-20' src={img1} alt="" />
                        </div>

                        <button className='bg-[#fde3e3] text-[#FF4545] px-5 py-2 rounded-lg'>
                            Pending
                        </button>

                    </div>
                    <h1 className='font-bold text-xl'>
                        Anti Age Face Treatment
                    </h1>
                    <p className='text-sm'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookingList;