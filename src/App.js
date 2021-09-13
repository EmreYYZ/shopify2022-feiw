import { Search } from "./components/Search";
import { Layout } from "./components/layout/Layout";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Layout>
      <Helmet>
        <title>🪐 Spacestagram</title>
      </Helmet>
      <Search />
    </Layout>
  );
}

export default App;
