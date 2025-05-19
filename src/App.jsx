import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
// import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";

const App = () => (
  <div className="min-h-screen transition-all duration-500 bg-black text-white light:bg-white light:text-black">
    <Navbar />

    {/* <Chatbox /> */}
    <Hero />
    <ShowcaseSection />
    {/* <LogoShowcase /> */}
    <FeatureCards />
    <Experience />
    <TechStack />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
);

export default App;
