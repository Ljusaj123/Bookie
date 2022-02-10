import Header from "../modules/header/Header";
import Booklist from "../components/Booklist";
import ShowCatalog from "../modules/show-catalog/showcatalog";
import Newsletter from "../modules/newsletter/newsletter";
import Footer from "../modules/footer/Footer";


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
