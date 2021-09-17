import React, { useState } from "react";

export const PostDescription = ({ description }) => {
  const [isExcerpt, setIsExcerpt] = useState(true);

  if (isExcerpt) {
    return (
      <section className="p-4 bg-gray-100 text-justify">
        <p>{description.substring(0, 170)}...</p>
        <div className="text-right">
          <button className="btn animation mt-4 bg-gray-900 text-gray-50 hover:bg-gray-600" onClick={() => setIsExcerpt(false)}>
            Read More
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="p-4 bg-gray-100 text-justify">
      <p>{description}</p>
      <div className="text-right">
        <button className="btn animation rounded-lg mt-4 bg-gray-900 hover:bg-gray-600 text-gray-50" onClick={() => setIsExcerpt(true)}>
          Read Less
        </button>
      </div>
    </section>
  );
};
