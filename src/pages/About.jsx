import AboutAchievement from "../components/About/AboutAchievement";
import AboutHero from "../components/About/AboutHero";
import AboutIntro from "../components/About/AboutIntro";
import OurHistory from "../components/About/OurHistory";
import ImageGallery from "../components/Home/ImageGallery";
import LatestBlogs from "../components/Home/LatestBlogs";
import OurExperts from "../components/Home/OurExperts";
import Testimonials from "../components/Home/Testimonials";

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutIntro />
      <OurHistory />
      <OurExperts />
      <AboutAchievement />
      <ImageGallery />
      <Testimonials />
      <LatestBlogs />
    </div>
  );
};

export default About;
