import React, { useState, useEffect } from "react";
import { PostCard } from "./PostCard";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";

export const SinglePost = ({ likedPosts, setLikedPosts }) => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  let { date } = useParams();
  useEffect(() => {
    let apiKey = "Z1MOBuhvpHaXD63Ap4LJWC3vJ4W6SOgfEPf3aMbw";
    let apodURL = "https://api.nasa.gov/planetary/apod?api_key=";
    fetch(`${apodURL}${apiKey}&date=${date}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        console.log(data);
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
    <>
      <Helmet>
        <title>{post.title} | 🪐 Spacestagram</title>
      </Helmet>
      <PostCard
        likedPosts={likedPosts}
        setLikedPosts={setLikedPosts}
        title={post.title}
        date={post.date}
        description={post.explanation}
        mediaType={post.media_type}
        imageSD={post.url}
        imageHD={post.hdurl}
        author={post.copyright}
      />
    </>
  );
};
