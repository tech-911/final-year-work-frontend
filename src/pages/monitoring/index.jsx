import React, { useEffect } from 'react';
import image1 from '../../resources/images/Frame 2.png'
import UseAuthContext from '../../components/Context/UseAuthContext';
import DateTime from '../../components/Datetime/DateTime';

const Monitor = () => {
    const { dispatch } = UseAuthContext()
  
    useEffect(() => {
        dispatch({type:"MONITOR"})
    }, [dispatch])
        
    return (
      <div className="h-screen w-full flex flex-col items-center bg-[#D9D9D9] justify-center sm:w-[62%] md:w-[67%] lg:w-3/4 xl:w-4/5">
        <DateTime />
        <div className="relative">
          <img src={image1} alt="Frame" className="absolute" />
          <embed
            className="z-[10] h-[240px] w-[320px] mx-auto mt-4 relative"
            src="https://c5db-102-91-70-195.ngrok-free.app/stream"
          ></embed>
        </div>
      </div>
    );
};

export default Monitor;