import React from "react";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main
        className="relative h-screen-adapt overflow-scroll"
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
