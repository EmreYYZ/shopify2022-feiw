import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { PostCard } from "./PostCard";
export const Posts = ({ likedPosts, setLikedPosts }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    let apiKey = "Z1MOBuhvpHaXD63Ap4LJWC3vJ4W6SOgfEPf3aMbw";
    let apodURL = "https://api.nasa.gov/planetary/apod?api_key=";
    fetch(`${apodURL}${apiKey}&count=9`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return (
      <section>
        <p>Loading the posts from NASA's Space Servers, this can take a bit of time.</p>
      </section>
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <PostCard
          likedPosts={likedPosts}
          setLikedPosts={setLikedPosts}
          key={uuidv4()}
          title={post.title}
          date={post.date}
          description={post.explanation}
          mediaType={post.media_type}
          imageSD={post.url}
          imageHD={post.hdurl}
          author={post.copyright}
        />
      ))}
    </div>
  );
};
