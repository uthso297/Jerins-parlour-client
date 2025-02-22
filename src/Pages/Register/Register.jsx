import { Link } from "react-router-dom";
import google from '../../assets/icons/Group 573.png'
import facebook from '../../assets/icons/facebook.png'
const Register = () => {
    return (
        <div className="p-10 border-2 lg:max-w-3xl w-[90%] mx-auto my-10 space-y-10">
            <h1 className="font-bold text-xl">Create an account</h1>

            <form className="space-y-8" action="">
                <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="py-1 border-b-2 focus:outline-none w-full"
                    style={{
                        borderTop: 'none',
                        borderLeft: 'none',
                        borderRight: 'none',
                        fontWeight: 'normal',
                    }}
                />

                <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="py-1 border-b-2 focus:outline-none w-full"
                    style={{
                        borderTop: 'none',
                        borderLeft: 'none',
                        borderRight: 'none',
                        fontWeight: 'normal',
                    }}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="py-1 border-b-2 focus:outline-none w-full"
                    style={{
                        borderTop: 'none',
                        borderLeft: 'none',
                        borderRight: 'none',
                        fontWeight: 'normal',
                    }}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="py-1 border-b-2 focus:outline-none w-full"
                    style={{
                        borderTop: 'none',
                        borderLeft: 'none',
                        borderRight: 'none',
                        fontWeight: 'normal',
                    }}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Confirm Password"
                    className="py-1 border-b-2 focus:outline-none w-full"
                    style={{
                        borderTop: 'none',
                        borderLeft: 'none',
                        borderRight: 'none',
                        fontWeight: 'normal',
                    }}
                />

                <button className='px-11 py-3 bg-[#F63E7B] rounded-lg text-white hover:bg-[#cb396a] w-full'>Create an account</button>

            </form>

            <div className="flex items-center justify-center">
                <Link to='/login'>
                    <p className=''>Already have an account? <span className='text-[#F63E7B] underline'>Log in</span> </p>
                </Link>
            </div>

            <div className="space-y-3 ">
                <div className="flex items-center lg:w-[500px] w-[90%] mx-auto pb-5">
                    <div className="flex-1 h-[0.1rem] bg-gray-500"></div>
                    <div className="mx-4 text-gray-500">Or</div>
                    <div className="flex-1 h-[0.1rem] bg-gray-500"></div>
                </div>

                <div className="flex items-center justify-center">
                    <div className='flex items-center border-2 rounded-[40px] lg:w-[500px] w-[90%]  py-1'>
                        <img className='w-8 h-8 ml-2 my-1' src={google} alt="" />
                        <h1 className='font-semibold mx-auto'>Continue with google</h1>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div className='flex items-center border-2 rounded-[40px] lg:w-[500px] w-[90%] py-1'>
                        <img className='w-8 h-8 ml-2 my-1' src={facebook} alt="" />
                        <h1 className='font-semibold mx-auto'>Continue with facebook</h1>
                    </div>
                </div>
            </div>

            <style>
                {`
                    input::placeholder {
                        // font-weight: bold;
                        opacity: 1;
                        color: #000; 
                    }
                `}
            </style>
        </div>
    );
};

export default Register;
