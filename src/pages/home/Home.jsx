import React, { useEffect } from "react";
import UseAuthContext from "../../components/Context/UseAuthContext";

const Home = () => {
  const { dispatch } = UseAuthContext()
  
  useEffect(() => {
    dispatch({type:"HOME"})
  }, [dispatch])
  
  return <div>About</div>;
};

export default Home;
