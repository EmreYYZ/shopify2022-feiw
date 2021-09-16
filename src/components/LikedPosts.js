import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { PostCard } from "./PostCard";
import { Helmet } from "react-helmet";
export const LikedPosts = ({ likedPosts, setLikedPosts }) => {
  const [posts, setPosts] = useState([]);

  let allPosts = posts || [];

  useEffect(() => {
    setPosts(JSON.parse(localStorage.getItem("likedPosts")));
  }, []);

  if (allPosts.length === 0) {
    return (
      <>
        <Helmet>
          <title>Likes | 🪐 Spacestagram</title>
        </Helmet>
        <p>You don't have any liked posts yet. Like some posts and come back!</p>
      </>
    );
  }

  return (
    <div>
      <Helmet>
        <title>Likes | 🪐 Spacestagram</title>
      </Helmet>
      {allPosts.map((post) => (
        <>
          <PostCard
            likedPosts={likedPosts}
            setLikedPosts={setLikedPosts}
            key={uuidv4()}
            title={post.title}
            date={post.date}
            description={post.description}
            mediaType={post.mediaType}
            imageSD={post.imageSD}
            imageHD={post.imageHD}
            author={post.author}
          />
        </>
      ))}
    </div>
  );
};
