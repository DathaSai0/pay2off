import React from "react";
import ScrollToTop from "../../utilis/scrollTop";
import NavBar from "../HeroSection/Index";
import Footer from "../Footer/Index";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
