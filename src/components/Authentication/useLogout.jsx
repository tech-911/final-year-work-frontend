import React from 'react';
import UseAuthContext from '../Context/UseAuthContext';

const useLogout = () => {
    const {dispatch} = UseAuthContext()

    const logout = () => {
        localStorage.removeItem('User')

        dispatch({type:"LOGOUT"})
    }

    return {logout};
};

export default useLogout;