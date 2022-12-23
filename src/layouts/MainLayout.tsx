import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = ({ children }: any) => {
  return (
    <div className="max-w-full bg-bodyBlack">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
