import React, { useEffect } from "react";
import UseAuthContext from "../../components/Context/UseAuthContext";

const Home = () => {
  const { dispatch } = UseAuthContext();

  useEffect(() => {
    dispatch({ type: "HOME" });
  }, [dispatch]);

  return (
    <div className="flex flex-col bg-[#d9d9d998] items-center py-20 px-9 w-full lg:h-screen sm:w-[62%] md:w-[67%] lg:w-3/4 xl:w-4/5">
      <p className="text-[#546270] text-[40px] font-[700] mb-14 self-start">
        Intelligent Vision for Pipeline Monitoring
      </p>
      <div className="w-full px-6 py-4 bg-white shadow rounded-2xl">
        <p className="text-[#546270] text-[25px] font-[700] mb-2 self-start">
          About:
        </p>
        <p className="text-[#546270] text-[20px] font-[400] mb-2 self-start text-justify">
          Pipelines are crucial infrastructures for transporting valuable
          resources over vast distances. Yet, they face threats from
          environmental conditions, vandalism, and defects, which can lead to
          catastrophic consequences like leaks, environmental damage, and
          resource supply disruption. As such modern monitoring systems have
          emerged to address defects and threats detection in real-time. This
          paper presents an innovative external pipeline monitoring robot that
          is lightweight and cost-effective in monitoring pipelines. This
          research details the design, development, capabilities, and future
          directions of the pipeline robot. The results demonstrate successful
          implementation of the robot's chassis design, motor control system,
          and data acquisition capabilities. The robot executes remote motion
          control commands while continuously capturing pipeline surface images
          for defect analysis.
        </p>
        <p className="text-[#546270] text-[18x] italic font-[700] mt-2 self-start">
          Keywords— external-pipe crawler, internet of things, leakage,
          monitoring, pipeline, robot
        </p>
        <div className="flex flex-col items-start mt-4">
          <p className="text-[#546270] text-[20px] italic font-[700] mt-2 self-start">
            Monitoring Credentials:
          </p>
          <p className="text-[#546270] text-[18x] italic font-[700] mt-2 self-start">
            Email: <span className="font-[400]">admin@futminna.edu.ng</span>
          </p>
          <p className="text-[#546270] text-[18x] italic font-[700] mt-1 self-start">
            Password: <span className="font-[400]">Admin123#</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
