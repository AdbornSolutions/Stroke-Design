import AboutAchievement from "../components/About/AboutAchievement";
import AboutHero from "../components/About/AboutHero";
import AboutIntro from "../components/About/AboutIntro";
import OurHistory from "../components/About/OurHistory";
import ImageGallery from "../components/ImageGallery";
import LatestBlogs from "../components/LatestBlogs";
import OurExperts from "../components/OurExperts";
import Testimonials from "../components/Testimonials";

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
