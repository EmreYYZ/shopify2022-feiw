import React, { useEffect, useState } from "react";

export const LikedPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(...localStorage);
  }, []);

  return (
    <div>
      <p>Liked posts will be here</p>
    </div>
  );
};
