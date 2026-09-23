import React from "react";
import ServiceHero from "../components/Services/ServiceHero";
import HowWeWork from "../components/HowWeWork";
import ImageGallery from "../components/ImageGallery";
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