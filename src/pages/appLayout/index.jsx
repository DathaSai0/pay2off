import React from "react";
import NavBar from "../HeroSection/Header";

function AppLayout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}

export default AppLayout;
