import React from "react";

export const Avatar = ({ author, date }) => {
  return (
    <picture className="mr-3">
      {author === "A random scientist." ? (
        <img
          className="rounded-full w-16 h-16 border-2 border-gray-900 bg-pink-200"
          src={`https://robohash.org/${author}.png?set=set2`}
          alt="Avatar of the user."
        />
      ) : (
        <img
          className="rounded-full w-16 h-16 border-2 border-gray-900 bg-pink-200"
          src={`https://robohash.org/${date}.png?set=set2`}
          alt="Avatar of the user."
        />
      )}
    </picture>
  );
};
