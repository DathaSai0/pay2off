import React from "react";
import ScrollToTop from "../../utilis/scrollTop";
import NavBar from "../HeroSection/Index";
import Footer from "../Footer/Index";

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
