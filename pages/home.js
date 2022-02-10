import Header from "../modules/header/Header";
import Booklist from "../components/Booklist";
import Footer from "../modules/footer/Footer";
import ShowCatalog from "../modules/show-catalog/showcatalog";


const Home = () => {
  return (
    <>
      <Header />
      <Booklist />
      <ShowCatalog />
      <Footer />
    </>
  );
};



export default Home;
