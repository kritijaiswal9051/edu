import { useState } from "react";
import About from "./components/About/About";
import Campus from "./components/campous/Campus";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/Programs";
import Testimonials from "./components/testimonials/Testimonials";
import Title from "./components/Title/Title";
import VedioPlayer from "./components/vedioPlayer/VedioPlayer";

function App() {
  const [play, setPlay] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our PROGRAM" title="What We Offer" />
        <Programs />
        <About setPlay={setPlay} />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Student Says" />
        <Testimonials />
        <Title subTitle="Contact us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VedioPlayer play={play} setPlay={setPlay} />
    </div>
  );
}

export default App;
