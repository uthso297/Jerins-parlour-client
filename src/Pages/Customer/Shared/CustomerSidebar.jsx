import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { CiShoppingCart, CiViewList } from 'react-icons/ci';
import { BsChatLeftDots } from 'react-icons/bs';
const CustomerSidebar = () => {
    return (
        <div className='lg:m-10 m-5 space-y-10'>
            <Link to='/'>
                <div>
                    <img className='h-12' src={logo} alt="" />
                </div>
            </Link>
            <ul className=''>
                <NavLink to='/customer/book' className={({ isActive }) => (isActive ? 'text-[#F63E7B]' : '')}><li className='flex items-center gap-1'> <CiShoppingCart />  <span>Book</span> </li></NavLink>
                <NavLink to='/customer/booking' className={({ isActive }) => (isActive ? 'text-[#F63E7B]' : '')}><li className='mt-5 flex items-center gap-1'>  <CiViewList /> <span>Booking list</span> </li></NavLink>
                <NavLink to='/customer/review' className={({ isActive }) => (isActive ? 'text-[#F63E7B]' : '')}><li className='mt-5 flex items-center gap-1'> <BsChatLeftDots />  <span>Review</span> </li></NavLink>
            </ul>
        </div>
    );
};

export default CustomerSidebar;