import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import AwardPublication from "./pages/AwardPublication";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
