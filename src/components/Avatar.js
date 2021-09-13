import React from "react";

export const Avatar = ({ date }) => {
  return (
    <picture>
      <img src={`https://robohash.org/${date}.png?set=set2`} alt="Avatar of the user." srcset="" />
    </picture>
  );
};
