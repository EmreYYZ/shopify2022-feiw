import React, { useState, useEffect } from "react";

export const PostImage = ({ title, imageHD, imageSD }) => {
  const [imageQuality, setImageQuality] = useState("SD");

  useEffect(() => {
    console.log(`Image Quality is changed to ${imageQuality}`);
  }, [imageQuality]);

  return (
    <section>
      <picture className="border-b-2 border-t-2 border-indigo-500">
        {imageQuality === "SD" ? <img src={imageSD} alt={`${title}`} /> : <img src={imageHD} alt={`${title}`} />}
      </picture>
      {imageHD !== imageSD ? (
        <section>
          <button onClick={() => setImageQuality("SD")}>SD</button>
          <button onClick={() => setImageQuality("HD")}>HD</button>
        </section>
      ) : null}
    </section>
  );
};
