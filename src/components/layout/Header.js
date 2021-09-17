import React from "react";
import { Navigation } from "../Navigation";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="mb-4">
      <h1 className="text-2xl font-bold">
        <Link to="/">Spacestagram</Link>
      </h1>
      <p className="text-gray-600 font-light">Image-sharing from the final frontier</p>
      <Navigation />
    </header>
  );
};
