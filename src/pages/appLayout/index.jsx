import React from "react";
import NavBar from "../HeroSection/Header";
import Footer from "../Footer/Footer";
import ScrollToTop from "../../utilis/scrollTop";

function AppLayout({ children }) {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default AppLayout;
