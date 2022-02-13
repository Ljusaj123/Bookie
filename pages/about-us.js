import Footer from "../modules/footer/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";

const About = () => {
  return (
    <section className="about">
      <header>
        <Navbar />
      </header>
      <main className="introduction">
        <h1>About Us</h1>
        <p>
          Bookie is an university project made by two students at Faculty of
          Electrical Engineering, Mechanical Engineering and Naval Architecture
          at Split, Croatia. We are using Gutendex - Web API for Project
          Gutenberg ebook metadata.
        </p>
      </main>
      <section className="vision">
        <div className="picture-container">
          <Image
            src="/about-us-picture.jpg"
            width={450}
            height={600}
            alt="we"
          />
        </div>
        <div className="text-container">
          <h1>Our Vision</h1>
          <p>
            Ben Okri said: Reading is an act of civilization; it is one of the
            greatest acts of civilization because it takes the free raw material
            of the mind and builds castles of possibilities. We couldnt agree
            more, that is why we made this app.
          </p>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default About;
