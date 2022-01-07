import React from "react";
import Header from "../Header";

const Layout = ({ children, lang = "fr" }) => {
  return (
    <div className="layout">
      <Header lang={lang || "fr"} />
      <main className="relative h-screen-adapt overflow-scroll">
        {children}
      </main>
    </div>
  );
};

export default Layout;
