import { Layout } from "./components/layout/Layout";
import { Helmet } from "react-helmet";
import { Posts } from "./components/Posts";
import { useState, useEffect } from "react";
import { LikedPosts } from "./components/LikedPosts";
import { SinglePost } from "./components/SinglePost";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {
    // check localstorage, if empty, create a record.
    localStorage.getItem("likedPosts") === null
      ? localStorage.setItem("likedPosts", JSON.stringify(likedPosts))
      : setLikedPosts(JSON.parse(localStorage.getItem("likedPosts")));
  }, []);

  return (
    <Router>
      <Layout>
        <Helmet>
          <title>🪐 Spacestagram</title>
        </Helmet>
        <Switch>
          <Route path="/" exact>
            <Posts likedPosts={likedPosts} setLikedPosts={setLikedPosts} />
          </Route>
          <Route path="/likes" exact>
            <LikedPosts likedPosts={likedPosts} setLikedPosts={setLikedPosts} />
          </Route>
          <Route path="/:date">
            <SinglePost likedPosts={likedPosts} setLikedPosts={setLikedPosts} />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
