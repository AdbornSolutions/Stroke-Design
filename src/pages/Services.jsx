import HowWeWork from "../components/Home/HowWeWork";
import ImageGallery from "../components/Home/ImageGallery";
import Testimonials from "../components/Home/Testimonials";
import OurServices from "../components/Services/OurServices";
import ServiceHero from "../components/Services/ServiceHero";

const Services = () => {
  return (
    <div>
      <ServiceHero />
      <OurServices />
      <HowWeWork />
      <ImageGallery />
      <Testimonials />
    </div>
  );
};

export default Services;
