import AboutIntro from "../components/Home/AboutIntro";
import AboutSection from "../components/Home/AboutSection";
import HeroSlider from "../components/Home/HeroSlider";
import HowWeWork from "../components/Home/HowWeWork";
import ImageGallery from "../components/Home/ImageGallery";
import LatestBlogs from "../components/Home/LatestBlogs";
import OurExperts from "../components/Home/OurExperts";
import ServiceSection1 from "../components/Home/ServiceSection1";
import ServiceSection2 from "../components/Home/ServiceSection2";
import StrokesReels from "../components/Home/StrokesReels";
import Testimonials from "../components/Home/Testimonials";

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
