import AboutSection from "./components/about/AboutMe";
import ContactSection from "./components/contact/ContactMe";
import ExpertiseSection from "./components/experties/Experties";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/hero/HeroSection";
import MapComponent from "./components/map/MapComponent";
import Navbar from "./components/navbar/Navbar";
import ProjectsSection from "./components/projects/Projects";
import ServicesSection from "./components/services/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />

      <ExpertiseSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
      <MapComponent />
      <Footer />
    </main>
  );
}
