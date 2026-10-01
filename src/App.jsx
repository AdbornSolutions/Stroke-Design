// import { lazy, Suspense } from "react";
// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import ScrollToTop from "./components/ScrollToTop";
// import SmoothScrolling from "./components/SmoothScrolling";
// import WhatsAppButton from "./components/WhatsAppButton";
// import Home from "./pages/Home";

// const About = lazy(() => import("./pages/About"));
// const AmitParekh = lazy(() => import("./pages/AmitParekh"));
// const AnandChandak = lazy(() => import("./pages/AnandChandak"));
// const AwardPublication = lazy(() => import("./pages/AwardPublication"));
// const Blog = lazy(() => import("./pages/Blog"));
// const Commercial = lazy(() => import("./pages/Commercial"));
// const Contact = lazy(() => import("./pages/Contact"));
// const DarshanHouse = lazy(() => import("./pages/DarshanHouse"));
// const Exterior = lazy(() => import("./pages/Exterior"));
// const Gallery = lazy(() => import("./pages/Gallery"));
// const Interior = lazy(() => import("./pages/Interior"));
// const Interior2D3D = lazy(() => import("./pages/Interior2D3D"));
// const JainMandir = lazy(() => import("./pages/JainMandir"));
// const JaiswalTata = lazy(() => import("./pages/JaiswalTata"));
// const PrakashAmarshetiwar = lazy(() => import("./pages/PrakashAmarshetiwar"));
// const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
// const Projects = lazy(() => import("./pages/Projects"));
// const Renovation = lazy(() => import("./pages/Renovation"));
// const Residential = lazy(() => import("./pages/Residential"));
// const RoninBunglow = lazy(() => import("./pages/RoninBunglow"));
// const Services = lazy(() => import("./pages/Services"));
// const SwatibenShah = lazy(() => import("./pages/SwatibenShah"));
// const TermCondition = lazy(() => import("./pages/TermCondition"));

// function App() {
//   return (
//     <>
//       <SmoothScrolling>
//         <ScrollToTop />
//         <Header />
//         <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center" role="status">Loading...</div>}>
//           <Routes>
//             <Route path="/" element={<SmoothScrolling><Home /></SmoothScrolling>} />
//             <Route path="/about" element={<SmoothScrolling><About /></SmoothScrolling>} />
//             <Route path="/services" element={<SmoothScrolling><Services /></SmoothScrolling>} />
//             <Route path="/blog" element={<SmoothScrolling><Blog /></SmoothScrolling>} />
//             <Route path="/awardpublication" element={<SmoothScrolling><AwardPublication /></SmoothScrolling>} />
//             <Route path="/projects" element={<SmoothScrolling><Projects /></SmoothScrolling>} />
//             <Route path="/gallery" element={<SmoothScrolling><Gallery /></SmoothScrolling>} />
//             <Route path="/contact" element={<SmoothScrolling><Contact /></SmoothScrolling>} />
//             <Route path="/terms-and-conditions" element={<SmoothScrolling><TermCondition /></SmoothScrolling>} />
//             <Route path="/privacy-policy" element={<SmoothScrolling><PrivacyPolicy /></SmoothScrolling>} />

//             <Route path="/amit-parekh" element={<SmoothScrolling><AmitParekh /></SmoothScrolling>} />
//             <Route path="/anand-chandak" element={<SmoothScrolling><AnandChandak /></SmoothScrolling>} />
//             <Route
//               path="/prakash-amarshetiwar"
//               element={<SmoothScrolling><PrakashAmarshetiwar /></SmoothScrolling>}
//             />
//             <Route path="/swatiben-shah" element={<SmoothScrolling><SwatibenShah /></SmoothScrolling>} />
//             <Route path="/darshan-house" element={<SmoothScrolling><DarshanHouse /></SmoothScrolling>} />
//             <Route path="/jain-mandir" element={<SmoothScrolling><JainMandir /></SmoothScrolling>} />
//             <Route path="/jaiswal-tata-capital" element={<SmoothScrolling><JaiswalTata /></SmoothScrolling>} />
//             <Route path="/ronin-bunglow" element={<SmoothScrolling><RoninBunglow /></SmoothScrolling>} />

//             <Route path="/residential" element={<SmoothScrolling><Residential /></SmoothScrolling>} />
//             <Route path="/commercial" element={<SmoothScrolling><Commercial /></SmoothScrolling>} />
//             <Route path="/interior" element={<SmoothScrolling><Interior /></SmoothScrolling>} />
//             <Route path="/exterior" element={<SmoothScrolling><Exterior /></SmoothScrolling>} />
//             <Route path="/interior2d3d" element={<SmoothScrolling><Interior2D3D /></SmoothScrolling>} />
//             <Route path="/renovation" element={<SmoothScrolling><Renovation /></SmoothScrolling>} />
//           </Routes>
//         </Suspense>
//         <WhatsAppButton />
//         <Footer />
//       </SmoothScrolling>
//     </>
//   );
// }

// export default App;


import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

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
const PrakashAmarshetiwar = lazy(() =>
  import("./pages/PrakashAmarshetiwar")
);
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Projects = lazy(() => import("./pages/Projects"));
const Renovation = lazy(() => import("./pages/Renovation"));
const Residential = lazy(() => import("./pages/Residential"));
const RoninBunglow = lazy(() => import("./pages/RoninBunglow"));
const Services = lazy(() => import("./pages/Services"));
const SwatibenShah = lazy(() => import("./pages/SwatibenShah"));
const TermCondition = lazy(() => import("./pages/TermCondition"));

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
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
        <AnimatePresence mode="wait">
          <SmoothScrolling key={location.pathname}>
            <Routes location={location}>
              {/* Main Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route
                path="/awardpublication"
                element={<AwardPublication />}
              />
              <Route path="/projects" element={<Projects />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />

              {/* Legal Pages */}
              <Route
                path="/terms-and-conditions"
                element={<TermCondition />}
              />
              <Route
                path="/privacy-policy"
                element={<PrivacyPolicy />}
              />

              {/* People / Projects */}
              <Route path="/amit-parekh" element={<AmitParekh />} />
              <Route path="/anand-chandak" element={<AnandChandak />} />
              <Route
                path="/prakash-amarshetiwar"
                element={<PrakashAmarshetiwar />}
              />
              <Route path="/swatiben-shah" element={<SwatibenShah />} />

              {/* Individual Projects */}
              <Route path="/darshan-house" element={<DarshanHouse />} />
              <Route path="/jain-mandir" element={<JainMandir />} />
              <Route
                path="/jaiswal-tata-capital"
                element={<JaiswalTata />}
              />
              <Route path="/ronin-bunglow" element={<RoninBunglow />} />

              {/* Services */}
              <Route path="/residential" element={<Residential />} />
              <Route path="/commercial" element={<Commercial />} />
              <Route path="/interior" element={<Interior />} />
              <Route path="/exterior" element={<Exterior />} />
              <Route path="/interior2d3d" element={<Interior2D3D />} />
              <Route path="/renovation" element={<Renovation />} />
            </Routes>
          </SmoothScrolling>
        </AnimatePresence>
      </Suspense>

      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;
