import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className="max-w-lg m-auto my-8">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
