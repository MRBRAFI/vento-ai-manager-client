import React from "react";
import { Outlet } from "react-router";
import Navbar from "../essentials/Navbar";
import Footer from "../essentials/Footer";


const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};


export default Layout;

