import React, { useState, useEffect } from "react";

export const Posts = () => {
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
        <p>Loading the posts from NASA's Space Servers</p>
      </section>
    );
  }

  return (
    <div>
      <p>Posts</p>
      {posts.map((post) => (
        <p>{post.title}</p>
      ))}
    </div>
  );
};
