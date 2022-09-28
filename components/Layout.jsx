import React from "react";
import Head from "next/head";
import NavBar from "./navbar";
import FooterBanner from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Shekka Computer</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
      <footer>
        <FooterBanner />
      </footer>
    </div>
  );
};

export default Layout;
