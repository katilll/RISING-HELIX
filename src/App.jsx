import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import TuitionCentre from "./components/TuitionCentre";
import TeachingJobs from "./components/TeachingJobs";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>

        {/* HOME ONLY HERO */}
        <Route
          path="/"
          element={
            <>
              <Hero />
            </>
          }
        />

        {/* TUITION PAGE */}
        <Route path="/tuition" element={<TuitionCentre />} />

        {/* JOB PAGE */}
        <Route path="/jobs" element={<TeachingJobs />} />

        {/* ABOUT PAGE FULL */}
        <Route path="/about" element={<About />} />

        {/* CONTACT PAGE */}
        <Route path="/contact" element={<ContactSection />} />

        {/* BLOGS PAGE */}
        <Route path="/blogs" element={<h1 className='text-gray-900 p-20'>Blogs Coming Soon...</h1>} />

      </Routes>

      <Footer />
    </Router>
  );
}
