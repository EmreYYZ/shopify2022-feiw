import React from "react";

export const PostVideo = ({ videoURL, title }) => {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe title={title} src={videoURL}></iframe>
    </div>
  );
};
