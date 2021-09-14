import React, { useState } from "react";

export const PostDescription = ({ description }) => {
  const [isExcerpt, setIsExcerpt] = useState(true);

  if (isExcerpt) {
    return (
      <>
        <p>{description.substring(0, 140)}...</p>
        <button onClick={() => setIsExcerpt(false)}>Read More</button>
      </>
    );
  }

  return (
    <>
      <p>{description}</p>
      <button onClick={() => setIsExcerpt(true)}>Read Less</button>
    </>
  );
};
