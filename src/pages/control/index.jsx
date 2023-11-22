import React, { useEffect } from 'react';
import UseAuthContext from '../../components/Context/UseAuthContext';

const Control = () => {
    const { dispatch } = UseAuthContext()
  
    useEffect(() => {
        dispatch({type:"CONTROL"})
    }, [dispatch])
    
    
    return (
        <div>
            Control
        </div>
    );
};

export default Control;