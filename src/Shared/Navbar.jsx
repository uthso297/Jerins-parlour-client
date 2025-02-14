import logo from '../assets/logo.png'
import menu from '../assets/icons/menu.png'
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)

    const mobileOption = () => {
        setMobileMenu(!mobileMenu)
        console.log(mobileMenu);
    }
    return (
        <>
            {/* tab and larger */}
            <div className="pt-12 pb-6">
                <div className='flex items-center justify-between'>
                    <div>
                        <img className='h-12' src={logo} alt="Jerins Parlour" />
                    </div>
                    <div className='hidden md:block'>
                        <div className='flex items-center gap-6'>
                            <ul className='flex items-center gap-10'>
                                <NavLink to="/" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
                                    <li>Home</li>
                                </NavLink>
                                <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
                                    <li>Portfolio</li>
                                </NavLink>
                                <li>Our Team</li>
                                <li>Contact Us</li>
                            </ul>
                            <button className='px-11 py-3 bg-[#F63E7B] rounded-lg text-white'>Login</button>
                        </div>
                    </div>
                    <div onClick={mobileOption} className='md:hidden'>
                        <img className='h-10' src={menu} alt="" />
                    </div>
                </div>
            </div>

            {/* mobile */}
            {
                mobileMenu && <>
                    <div className='min-h-screen'>
                        <ul className='text-center space-y-10'>
                            <NavLink onClick={() => setMobileMenu(false)} to="/" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
                                <li>Home</li>
                            </NavLink>
                            <NavLink onClick={() => setMobileMenu(false)} to="/portfolio" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
                                <li>Portfolio</li>
                            </NavLink>
                            <li>Our Team</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                </>
            }
        </>
    );
};

export default Navbar;