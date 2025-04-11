import React from "react";
import NavBar from "../HeroSection/Header";
import Footer from "../Footer/Footer";

function AppLayout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default AppLayout;
