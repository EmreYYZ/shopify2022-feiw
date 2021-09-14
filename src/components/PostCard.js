import React from "react";
import { Avatar } from "./Avatar";
import { PostDescription } from "./PostDescription";
import { PostImage } from "./PostImage";
import { PostVideo } from "./PostVideo";

export const PostCard = ({ title, author, description, date, mediaType, imageSD, imageHD }) => {
  if (author === undefined) {
    author = "A random space scientist.";
  }

  return (
    <article>
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{author}</p>
      {mediaType === "image" ? <PostImage imageHD={imageHD} title={title} imageSD={imageSD} /> : <PostVideo videoURL={imageSD} title={title} />}

      <PostDescription description={description} />
      <Avatar author={author} date={date} />
    </article>
  );
};
