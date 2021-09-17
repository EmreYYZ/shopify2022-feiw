import React, { useState, useEffect } from "react";

export const SharePost = ({ date }) => {
  const [linkCopied, setLinkCopied] = useState(false);

  const handleClick = (e) => {
    navigator.clipboard.writeText(`${window.location.origin}/${date}`);
    setLinkCopied(true);
    setTimeout(() => {
      setLinkCopied(false);
    }, 3000);
  };

  useEffect(() => {}, [linkCopied]);

  if (linkCopied) {
    return (
      <>
        <button disabled="disabled">Link Copied!</button>
      </>
    );
  }
  return (
    <>
      <button onClick={handleClick}>Share</button>
    </>
  );
};
