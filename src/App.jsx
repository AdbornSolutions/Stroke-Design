import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import SmoothScrolling from "./components/SmoothScrolling";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const AmitParekh = lazy(() => import("./pages/AmitParekh"));
const AnandChandak = lazy(() => import("./pages/AnandChandak"));
const AwardPublication = lazy(() => import("./pages/AwardPublication"));
const Blog = lazy(() => import("./pages/Blog"));
const Commercial = lazy(() => import("./pages/Commercial"));
const Contact = lazy(() => import("./pages/Contact"));
const DarshanHouse = lazy(() => import("./pages/DarshanHouse"));
const Exterior = lazy(() => import("./pages/Exterior"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Interior = lazy(() => import("./pages/Interior"));
const Interior2D3D = lazy(() => import("./pages/Interior2D3D"));
const JainMandir = lazy(() => import("./pages/JainMandir"));
const JaiswalTata = lazy(() => import("./pages/JaiswalTata"));
const PrakashAmarshetiwar = lazy(() => import("./pages/PrakashAmarshetiwar"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Projects = lazy(() => import("./pages/Projects"));
const Renovation = lazy(() => import("./pages/Renovation"));
const Residential = lazy(() => import("./pages/Residential"));
const RoninBunglow = lazy(() => import("./pages/RoninBunglow"));
const Services = lazy(() => import("./pages/Services"));
const SwatibenShah = lazy(() => import("./pages/SwatibenShah"));
const TermCondition = lazy(() => import("./pages/TermCondition"));

function App() {
  return (
    <>
      <ScrollToTop />
      <SmoothScrolling />
      <Header />

      <Suspense
        fallback={
          <div
            className="min-h-[60vh] flex items-center justify-center"
            role="status"
          >
            Loading...
          </div>
        }
      >
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
          <Route
            path="/prakash-amarshetiwar"
            element={<PrakashAmarshetiwar />}
          />
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
      </Suspense>

      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;
