import React, { useEffect } from "react";
import image1 from "../../resources/images/Frame 2.png";
import UseAuthContext from "../../components/Context/UseAuthContext";
import DateTime from "../../components/Datetime/DateTime";

const Monitor = () => {
  const { dispatch } = UseAuthContext();

  useEffect(() => {
    dispatch({ type: "MONITOR" });
  }, [dispatch]);

  return (
    <div className="flex flex-col bg-[#d9d9d998] items-center py-20  px-4 lg:px-9 w-full sm:w-[62%] md:w-[67%] lg:w-3/4 xl:w-4/5">
      <p className="text-[#546270] text-[40px] font-[700] mb-14 self-start">
        Monitoring
      </p>
      <DateTime />
      {/* <div className="relative">
          <img src={image1} alt="Frame" className="absolute" />
          <embed
            className="z-[10] h-[240px] w-[320px] mx-auto mt-4 relative"
            src="https://c5db-102-91-70-195.ngrok-free.app/stream"
          ></embed>
        </div> */}

      {/* //Redirect button to https://pvds.onrender.com/ */}

      <div
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 mb-14 rounded cursor-pointer transition duration-200"
        onClick={() => window.open("https://pvds.onrender.com/", "_blank")}
      >
        Full Monitor View Page &#8599;
      </div>
      <div style={{ width: "100%", height: "100vh" }}>
        <iframe
          src="https://pvds.onrender.com/"
          title="Embedded PVDS"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
};

export default Monitor;
