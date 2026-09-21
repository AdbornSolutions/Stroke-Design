import "./App.css";
import AboutIntro from "./components/AboutIntro";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import HowWeWork from "./components/HowWeWork";
import LatestBlogs from "./components/LatestBlogs";
import OurExperts from "./components/OurExperts";
import ServiceSection1 from "./components/ServiceSection1";
import ServiceSection2 from "./components/ServiceSection2";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <ServiceSection1 />
        <AboutIntro />
        <ServiceSection2 />
        <HowWeWork />
        <OurExperts />
        <Testimonials />
        <LatestBlogs />
      </main>
      <Footer />
    </>
  );
}

export default App;
