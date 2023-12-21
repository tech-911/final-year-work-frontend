import React from 'react';
import Logo from "../../resources/images/AEIRG Logo.png";
import home from "../../resources/images/Group 9.png";
import control from "../../resources/images/Group 66.png";
import monitor from "../../resources/images/Group 7.png";
import close from "../../resources/images/close.png";
import menubar from "../../resources/images/menubar.png"
import { Link } from 'react-router-dom';
import UseAuthContext from '../Context/UseAuthContext';
import useLogout from '../Authentication/useLogout';


const MobileNav = () => {
    const { user, page } = UseAuthContext()
    const { logout } = useLogout()

    const handleClick = (e) => {
        logout()
    }

    const displayMenu = () => {
        const menu = document.querySelector(".menu");
        const menubar = document.querySelector(".menubar");
        const close = document.querySelector(".close");

        if (menu.style.visibility === "visible") {
            menu.style.visibility = "hidden"
            menu.style.left = "-100%"
            menubar.style.display = "block"
            close.style.display = "none"
        } else {
            menu.style.visibility = "visible"
            menu.style.left = "0"
            menubar.style.display = "none"
            close.style.display = "block"
        }
    }

    return (
    <div >
            <div className='flex py-3.5 px-5 bg-[#a0aab4] items-center justify-between relative '>
                <div className='flex w-fit items-center'>
                    <div>
                        <img src={menubar} alt="Menu bar icon" onClick={displayMenu} className='menubar w-6  mr-4 cursor-pointer' />
                        <img src={close} alt="Close menu icon" onClick={displayMenu} className='close w-6 mr-4 hidden block cursor-pointer' />
                    </div>
                    
                    <img src={ Logo } alt="AEIRG LOGO" className='w-9'/>
                </div>
                <div>
                    {!user ? <Link to='auth' className='flex mb-[1.6875rem]'>
                            <button
                                className=' cursor-pointer block mt-[50%] mx-auto px-7 py-1 text-white text-[1.375rem] border-2 border-white rounded-3xl hover:bg-white transition-colors duration-700 hover:text-[#708090] active:border'>Login</button>
                        </Link> :
                            <button onClick={ handleClick }
                                className='block cursor-pointer px-5 py-1 text-white text-sm border-2 border-white hover:rounded-3xl hover:bg-white transition-colors duration-700 hover:text-[#708090] active:border'>Logout</button>}
                </div>
                
                <div className={`menu z-20 w-[90%] bg-[#708090] invisible h-screen absolute top-[3.9375rem] left-[-100%] transition-all  duration-700 max-[375px]:w-full`}>
                    <div className='flex justify-between mb-[4.375rem] items-center px-10'>
                        <div className='bg-white w-fit h-fit rounded-b-lg mx-auto'>
                          <img src={Logo} alt="AEIRG Logo" className='py-5 px-7  w-[170px] h-[150px]' />
                        </div>                        
                    </div>
                    
                    <div className=''>
                        <Link to='/' className='flex mb-[1.6875rem] cursor-pointer'>
                            <img src={home} alt="Home icon" className='w-[2.3125rem] h-[2.3125rem] ml-[2.9375rem]'/>
                            <p className={`text-white my-auto ml-[0.5625rem] text-2xl ${page==="home" && 'after:content-[""] after:w-[80%] after:border after:border-white after:block after:ml-[0.0625rem] after:mt-0.5 font-bold'}`}>Home</p>
                        </Link>
                        <Link to='control' className='flex mb-[1.6875rem] cursor-pointer'>
                            <img src={control} alt="Control Icon" className='w-[2.3125rem] h-[2.3125rem] ml-[2.9375rem]'/>
                            <p className={`text-white my-auto ml-[0.5625rem] text-2xl ${page==="control" && 'after:content-[""] after:w-[80%] after:border after:border-white after:block after:ml-[0.0625rem] after:mt-0.5 font-bold'}`}>Control</p>
                        </Link>
                        <Link to='monitor' className='flex mb-[1.6875rem] cursor-pointer'>
                            <img src={monitor} alt="Monitoring Icon" className='w-[2.3125rem] h-[2.3125rem] ml-[2.9375rem]'/>
                            <p className={`text-white my-auto ml-[0.5625rem] text-2xl ${page==="monitor" && 'after:content-[""] after:w-[80%] after:border after:border-white after:block after:ml-[0.0625rem] after:mt-0.5 font-bold'}`}>Monitoring</p>
                        </Link>
                        {!user ? <Link to='auth' className='flex mb-[1.6875rem] cursor-pointer'>
                            <button
                                className='block mt-[50%] mx-auto px-7 py-1 text-white text-[1.375rem] border-2 border-white rounded-3xl hover:bg-white transition-colors duration-700 hover:text-[#708090] active:border'>Login</button>
                        </Link> :
                            <button onClick={ handleClick }
                                className='block cursor-pointer mt-[50%] mx-auto px-7 py-1 text-white text-[1.375rem] border-2 border-white rounded-3xl hover:bg-white transition-colors duration-700 hover:text-[#708090] active:border'>Logout</button>}
                    </div>
                </div >
            </div>
            
        </div>
    );
}

export default MobileNav;