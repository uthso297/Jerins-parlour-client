import logo from '../../assets/logo.png'
import google from '../../assets/icons/Group 573.png'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-start pt-32 space-y-5'>
            <Link to='/'>
                <div>
                    <img className='h-12 mb-20' src={logo} alt="Jerins Parlour" />
                </div>
            </Link>
            <div className=''>
                <h1 className='font-bold text-xl'>Login With</h1>
            </div>
            <div>
                <div className='flex items-center border-2 rounded-[40px] lg:w-[500px] py-1'>
                    <img className='w-8 h-8 ml-2 my-1' src={google} alt="" />
                    <h1 className='font-semibold mx-auto'>Continue with google</h1>
                </div>
                <div className='flex items-center justify-center mt-3'>
                    <p className=''>Don't have an account? <span className='text-[#F63E7B] underline'>Create an account</span> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;