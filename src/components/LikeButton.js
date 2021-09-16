import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
export const LikeButton = ({ likedPosts, setLikedPosts, title, date, description, author, mediaType, imageHD, imageSD }) => {
  const [liked, setLiked] = useState(false);

  const saveToLocal = (post) => {
    let currentStorage = JSON.parse(localStorage.getItem("likedPosts"));
    currentStorage.push(post);
    setLikedPosts(currentStorage);
    localStorage.setItem("likedPosts", JSON.stringify(currentStorage));
  };

  const removeFromLocal = (post) => {
    let currentStorage = JSON.parse(localStorage.getItem("likedPosts"));
    let updatedLikedPosts = currentStorage.filter((eachPost) => eachPost.id !== post.id);
    setLikedPosts(updatedLikedPosts);
    localStorage.setItem("likedPosts", JSON.stringify(updatedLikedPosts));
  };

  const checkIfExists = () => {
    return likedPosts.some((likedPost) => likedPost.id === title + date);
  };

  const handleClick = (e) => {
    e.preventDefault();

    let postToBeSaved = {
      id: title + date,
      likedAt: new Date(),
      title: title,
      description: description,
      author: author,
      mediaType: mediaType,
      imageHD: imageHD,
      imageSD: imageSD,
      date: date,
    };

    if (!liked) {
      // if liked, save post to local storage
      saveToLocal(postToBeSaved);
    } else {
      // if unliked, remove post from local storage
      removeFromLocal(postToBeSaved);
    }

    // finally change liked state to opposite
    setLiked(!liked);
  };

  useEffect(() => {
    // Check if the post is in localStorage (liked)
    console.log(checkIfExists());
    if (checkIfExists()) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, []);

  useEffect(() => {}, [liked]);

  if (liked) {
    return (
      <>
        <button className="bg-red-500 text-gray-50" onClick={handleClick}>
          Dislike
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
