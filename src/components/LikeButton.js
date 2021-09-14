import React, { useState, useEffect } from "react";

export const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    // if liked, save post to local storage

    // if unliked, remove post from local storage

    // finally change liked state to opposite
    setLiked(!liked);
  };

  useEffect(() => {}, [liked]);

  if (liked) {
    return (
      <>
        <button className="bg-red-500 text-gray-50" onClick={handleClick}>
          Like
        </button>
      </>
    );
  }

  return (
    <>
      <button onClick={handleClick}>Like</button>
    </>
  );
};
