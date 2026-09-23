import AboutIntro from "../components/AboutIntro";
import AboutSection from "../components/AboutSection";
import HeroSlider from "../components/HeroSlider";
import HowWeWork from "../components/HowWeWork";
import ImageGallery from "../components/ImageGallery";
import LatestBlogs from "../components/LatestBlogs";
import OurExperts from "../components/OurExperts";
import ServiceSection1 from "../components/ServiceSection1";
import ServiceSection2 from "../components/ServiceSection2";
import StrokesReels from "../components/StrokesReels";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
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
        <StrokesReels />
        <ImageGallery />
      </main>
    </div>
  );
};

export default Home;
