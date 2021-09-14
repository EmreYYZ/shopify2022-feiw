import React, { useState, useEffect } from "react";

export const PostImage = ({ title, imageHD, imageSD }) => {
  const [imageQuality, setImageQuality] = useState("SD");

  useEffect(() => {
    console.log(`Image Quality is changed to ${imageQuality}`);
  }, [imageQuality]);

  return (
    <section>
      {imageQuality === "SD" ? <img src={imageSD} alt={`${title}`} /> : <img src={imageHD} alt={`${title}`} />}

      {imageHD !== imageSD ? (
        <section>
          <button onClick={() => setImageQuality("SD")}>SD</button>
          <button onClick={() => setImageQuality("HD")}>HD</button>
        </section>
      ) : null}
    </section>
  );
};
