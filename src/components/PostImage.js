import React, { useState, useEffect } from "react";

export const PostImage = ({ title, imageHD, imageSD }) => {
  const [imageQuality, setImageQuality] = useState("SD");

  useEffect(() => {
    console.log(`Image Quality is changed to ${imageQuality}`);
  }, [imageQuality]);

  return (
    <section className="relative">
      <picture>
        {imageQuality === "SD" ? (
          <a href={imageSD} target="_blank" rel="noopener noreferrer">
            <img className="w-full" src={imageSD} alt={`${title}`} />
          </a>
        ) : (
          <a href={imageHD} target="_blank" rel="noopener noreferrer">
            <img className="w-full" src={imageHD} alt={`${title}`} />
          </a>
        )}
      </picture>
      {imageHD !== imageSD ? (
        <section className="absolute bottom-0 left-0 bg-gray-50 opacity-70">
          {imageQuality === "SD" ? (
            <button className="animation bg-green-400 font-semibold text-gray-700 hover:bg-green-500 p-1" onClick={() => setImageQuality("SD")}>
              SD
            </button>
          ) : (
            <button className="p-1 animation font-semibold text-gray-700 hover:bg-gray-300" onClick={() => setImageQuality("SD")}>
              SD
            </button>
          )}
          {imageQuality === "HD" ? (
            <button className="animation bg-green-400 font-semibold text-gray-700 hover:bg-green-500 p-1" onClick={() => setImageQuality("HD")}>
              HD
            </button>
          ) : (
            <button className="animation p-1 font-semibold text-gray-700 hover:bg-gray-300" onClick={() => setImageQuality("HD")}>
              HD
            </button>
          )}
        </section>
      ) : null}
    </section>
  );
};
