import React, { useEffect } from 'react';
import UseAuthContext from '../../components/Context/UseAuthContext';

const Monitor = () => {
    const { dispatch } = UseAuthContext()
  
    useEffect(() => {
        dispatch({type:"MONITOR"})
    }, [dispatch])
        
    return (
        <div>
            
        </div>
    );
};

export default Monitor;