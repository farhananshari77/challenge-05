// import { Link } from 'react-router-dom';
import Layout from "./components/Layout";
import ContentHeader from "./components/ContentHeader";
import ContentHome from "./components/ContentHome";

function App() {
  return (
    <>
      <Layout>
        <ContentHeader />
        <ContentHome />
      </Layout>
    </> 
  );
}

export default App;