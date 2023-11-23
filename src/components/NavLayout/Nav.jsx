import React from 'react';
import Logo from "../../resources/images/AEIRG Logo.png";
import home from "../../resources/images/Group 9.png";
import control from "../../resources/images/Group 66.png";
import monitor from "../../resources/images/Group 7.png";
import about from "../../resources/images/Group 70.png";
import { Link } from 'react-router-dom';
import UseAuthContext from '../Context/UseAuthContext';
import useLogout from '../Authentication/useLogout';


const Nav = () => {
    const { user, page } = UseAuthContext()
    const { logout } = useLogout()
    
    const handleClick = (e) => {
        logout()
    }

    return (
        page !== 'auth' &&
        <div className={`w-1/5 bg-[#708090] h-screen`}>
            <div className='bg-white w-fit h-fit mb-[4.375rem] mx-auto rounded-b-lg'>
                <img src={Logo} alt="AEIRG Logo" className='py-5 px-7 w-[12.25rem] h-[175px]'/>
            </div>
            <div className=''>
                <Link to='/' className='flex mb-[1.6875rem]'>
                    <img src={home} alt="Home icon" className='w-[2.3125rem] h-[2.3125rem] ml-[2.9375rem]'/>
                    <p className={`text-white my-auto ml-[0.5625rem] text-2xl ${page==="home" && 'after:content-[""] after:w-[80%] after:border after:border-white after:block after:ml-[0.0625rem] after:mt-0.5 font-bold'}`}>Home</p>
                </Link>
                <Link to='control' className='flex mb-[1.6875rem]'>
                    <img src={control} alt="Control Icon" className='w-[2.3125rem] h-[2.3125rem] ml-[2.9375rem]'/>
                    <p className={`text-white my-auto ml-[0.5625rem] text-2xl ${page==="control" && 'after:content-[""] after:w-[80%] after:border after:border-white after:block after:ml-[0.0625rem] after:mt-0.5 font-bold'}`}>Control</p>
                </Link>
                <Link to='monitor' className='flex mb-[1.6875rem]'>
                    <img src={monitor} alt="Monitoring Icon" className='w-[2.3125rem] h-[2.3125rem] ml-[2.9375rem]'/>
                    <p className={`text-white my-auto ml-[0.5625rem] text-2xl ${page==="monitor" && 'after:content-[""] after:w-[80%] after:border after:border-white after:block after:ml-[0.0625rem] after:mt-0.5 font-bold'}`}>Monitoring</p>
                </Link>
                {!user ? <Link to='auth' className='flex mb-[1.6875rem]'>
                    <img src={about} alt="About Icon" className='w-[2.3125rem] h-[2.3125rem] ml-[2.9375rem]' />
                    <p className={`text-white my-auto ml-[0.5625rem] text-2xl ${page === "auth" && 'after:content-[""] after:w-[80%] after:border after:border-white after:block after:ml-[0.0625rem] after:mt-0.5 font-bold'}`}>Login</p>
                </Link> :
                    <button onClick={ handleClick }
                        className='block mt-[50%] mx-auto px-7 py-1 text-white text-[1.375rem] border-2 border-white rounded-3xl hover:bg-white transition-colors duration-700 hover:text-[#708090] active:border'>Logout</button>}
            </div>
        </div >
    );
}

export default Nav;