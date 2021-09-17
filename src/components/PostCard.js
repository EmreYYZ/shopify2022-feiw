import React, { useState } from "react";
import { Avatar } from "./Avatar";
import { LikeButton } from "./LikeButton";
import { PostDescription } from "./PostDescription";
import { PostImage } from "./PostImage";
import { PostVideo } from "./PostVideo";
import { SharePost } from "./SharePost";

export const PostCard = ({ likedPosts, setLikedPosts, title, author, description, date, mediaType, imageSD, imageHD }) => {
  if (author === undefined) {
    author = "A random space scientist.";
  }

  return (
    <article className="shadow-md bg-gray-100 rounded-lg my-8">
      <section className="flex items-center my-2 pt-3 px-4">
        <Avatar author={author} date={date} />
        <section>
          <h2 className="font-semibold text-lg leading-5">{title}</h2>
          <p className="text-sm text-gray-500">
            by <span className="text-gray-800 font-medium">{author}</span>
          </p>
          <p className="text-sm text-gray-500 font-medium">
            <span role="img" aria-label="calendar">
              📅
            </span>{" "}
            <time datetime={date}>{date}</time>
          </p>
        </section>
      </section>
      <section>
        {mediaType === "image" ? <PostImage imageHD={imageHD} title={title} imageSD={imageSD} /> : <PostVideo videoURL={imageSD} title={title} />}
      </section>
      <menu className="flex list-none list-inside p-0 m-0" type="toolbar">
        <li className="mr-2">
          <LikeButton
            likedPosts={likedPosts}
            setLikedPosts={setLikedPosts}
            title={title}
            date={date}
            description={description}
            author={author}
            mediaType={mediaType}
            imageHD={imageHD}
            imageSD={imageSD}
          />
        </li>
        <li>
          <SharePost date={date} />
        </li>
      </menu>
      <PostDescription description={description} />
    </article>
  );
};
