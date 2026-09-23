import React from "react";
import ServiceHero from "../components/Services/ServiceHero";
import HowWeWork from "../components/Home/HowWeWork";
import ImageGallery from "../components/Home/ImageGallery";
import OurServices from "../components/Services/OurServices";

const Services = () => {
    return (
        <div>
            <ServiceHero />
            <OurServices />
            <HowWeWork />
            <ImageGallery />
        </div>
    )
}

export default Services;