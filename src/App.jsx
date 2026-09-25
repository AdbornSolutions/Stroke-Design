import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import AmitParekh from "./pages/AmitParekh";
import AnandChandak from "./pages/AnandChandak";
import AwardPublication from "./pages/AwardPublication";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import PrakashAmarshetiwar from "./pages/PrakashAmarshetiwar";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import SwatibenShah from "./pages/SwatibenShah";
import TermCondition from "./pages/TermCondition";
import DarshanHouse from "./pages/DarshanHouse";

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

        <Route path="/amitparekh" element={<AmitParekh />} />
        <Route path="/anandchandak" element={<AnandChandak />} />
        <Route path="/prakashamarshetiwar" element={<PrakashAmarshetiwar />} />
        <Route path="/swatibenshah" element={<SwatibenShah />} />
        <Route path="/darshanhouse" element={<DarshanHouse />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
