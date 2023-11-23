import React from 'react';
import Nav from './Nav'
import { Outlet } from 'react-router-dom';
import UseAuthContext from '../Context/UseAuthContext';

const Layout = () => {
    const { page } = UseAuthContext()
    return (
        <div className="flex">
            {page !== 'auth' && <Nav />}
            <Outlet/>
        </div>
    );
}

export default Layout;