import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className="max-w-lg mx-3 sm:m-auto sm:my-4 my-8">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
