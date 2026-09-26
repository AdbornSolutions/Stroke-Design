import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import AmitParekh from "./pages/AmitParekh";
import AnandChandak from "./pages/AnandChandak";
import AwardPublication from "./pages/AwardPublication";
import Blog from "./pages/Blog";
import Commercial from "./pages/Commercial";
import Contact from "./pages/Contact";
import DarshanHouse from "./pages/DarshanHouse";
import Exterior from "./pages/Exterior";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Interior from "./pages/Interior";
import Interior2D3D from "./pages/Interior2D3D";
import JainMandir from "./pages/JainMandir";
import JaiswalTata from "./pages/JaiswalTata";
import PrakashAmarshetiwar from "./pages/PrakashAmarshetiwar";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Projects from "./pages/Projects";
import Renovation from "./pages/Renovation";
import Residential from "./pages/Residential";
import RoninBunglow from "./pages/RoninBunglow";
import Services from "./pages/Services";
import SwatibenShah from "./pages/SwatibenShah";
import TermCondition from "./pages/TermCondition";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/awardpublication" element={<AwardPublication />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<TermCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/amit-parekh" element={<AmitParekh />} />
        <Route path="/anand-chandak" element={<AnandChandak />} />
        <Route path="/prakash-amarshetiwar" element={<PrakashAmarshetiwar />} />
        <Route path="/swatiben-shah" element={<SwatibenShah />} />
        <Route path="/darshan-house" element={<DarshanHouse />} />
        <Route path="/jain-mandir" element={<JainMandir />} />
        <Route path="/jaiswal-tata-capital" element={<JaiswalTata />} />
        <Route path="/ronin-bunglow" element={<RoninBunglow />} />

        <Route path="/residential" element={<Residential />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/interior" element={<Interior />} />
        <Route path="/exterior" element={<Exterior />} />
        <Route path="/interior2d3d" element={<Interior2D3D />} />
        <Route path="/renovation" element={<Renovation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
