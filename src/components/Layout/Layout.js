import React from "react";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main
        className="relative"
        style={{ overflowY: "scroll", height: "calc(100vh - 101px)" }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
