import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="mt-2">
      <ul className="flex text-gray-500 font-medium">
        <Link className="flex items-center justify-center mr-4 hover:text-gray-800" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <li>Home</li>
        </Link>
        <Link className="flex items-center justify-center hover:text-gray-800" to="/likes">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <li>Likes</li>
        </Link>
      </ul>
    </nav>
  );
};
