import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/likes">
          <li>Likes</li>
        </Link>
      </ul>
    </nav>
  );
};
