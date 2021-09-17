import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
export const LikeButton = ({ likedPosts, setLikedPosts, title, date, description, author, mediaType, imageHD, imageSD }) => {
  const [liked, setLiked] = useState(false);

  // Save post to local storage
  const saveToLocal = (post) => {
    let currentStorage = JSON.parse(localStorage.getItem("likedPosts"));
    currentStorage.push(post);
    setLikedPosts(currentStorage);
    localStorage.setItem("likedPosts", JSON.stringify(currentStorage));
  };

  // Remove post from localStorage
  const removeFromLocal = (post) => {
    let currentStorage = JSON.parse(localStorage.getItem("likedPosts"));
    let updatedLikedPosts = currentStorage.filter((eachPost) => eachPost.id !== post.id);
    setLikedPosts(updatedLikedPosts);
    localStorage.setItem("likedPosts", JSON.stringify(updatedLikedPosts));
  };
  // check if the post exists in localStorage
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
        <button className="animation text-red-500 hover:text-red-700 flex" onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          Dislike
        </button>
      </>
    );
  }

  return (
    <>
      <button onClick={handleClick} className="flex animation hover:text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        Like
      </button>
    </>
  );
};
