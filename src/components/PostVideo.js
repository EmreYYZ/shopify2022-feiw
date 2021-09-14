import React from "react";

export const PostVideo = ({ videoURL, title }) => {
  return (
    <div>
      <p>Video Content</p>
      <iframe title={title} width="420" height="315" src={videoURL}></iframe>
    </div>
  );
};
