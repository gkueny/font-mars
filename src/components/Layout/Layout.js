import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children, lang = "fr" }) => {
  return (
    <div className="layout flex flex-col" style={{ minHeight: "100vh" }}>
      <Header lang={lang || "fr"} />
      <main className="relative flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
