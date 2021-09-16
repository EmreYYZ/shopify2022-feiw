import { Layout } from "./components/layout/Layout";
import { Helmet } from "react-helmet";
import { Posts } from "./components/Posts";
import { useState, useEffect } from "react";
import { LikedPosts } from "./components/LikedPosts";
function App() {
  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {
    // check localstorage, if empty, create a record.
    localStorage.getItem("likedPosts") === null
      ? localStorage.setItem("likedPosts", JSON.stringify(likedPosts))
      : setLikedPosts(JSON.parse(localStorage.getItem("likedPosts")));
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>🪐 Spacestagram</title>
      </Helmet>

      <Posts likedPosts={likedPosts} setLikedPosts={setLikedPosts} />
      <LikedPosts likedPosts={likedPosts} setLikedPosts={setLikedPosts} />
    </Layout>
  );
}

export default App;
