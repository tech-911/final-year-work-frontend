import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import MobileNav from "./mobileNav";

const Layout = () => {
  const [winscreens, setScreens] = useState(window.screen.width);
  console.log(window.screen.width);

  useEffect(() => {
    window.onresize = () => {
      setScreens(window.screen.width);
    };
  }, []);
  console.log("layout", winscreens);
  return (
    <div className={`${winscreens >= 640 && "flex"}`}>
      {winscreens < 640 ? <MobileNav /> : <Nav />}

      <Outlet />
    </div>
  );
};

export default Layout;
