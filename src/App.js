import { Search } from "./components/Search";
import { Layout } from "./components/layout/Layout";
import { Helmet } from "react-helmet";
import { Posts } from "./components/Posts";

function App() {
  return (
    <Layout>
      <Helmet>
        <title>🪐 Spacestagram</title>
      </Helmet>
      <Posts />
    </Layout>
  );
}

export default App;
