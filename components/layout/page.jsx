import React from "react";
import Head from "next/head";
import Navbar from "../navbar/page";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>E Commerce Pro</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
    </div>
  );
};

export default Layout;
