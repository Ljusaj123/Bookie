import Header from "../modules/header/Header";
import Booklist from "../components/Booklist";
import Footer from "../modules/footer/Footer";
import ShowCatalog from "../modules/show-catalog/showcatalog";
import Newsletter from "../modules/newsletter/newsletter";


const Home = () => {
  return (
    <>
      <Header />
      <Booklist />
      <ShowCatalog />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
