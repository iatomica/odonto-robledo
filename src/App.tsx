import { Navbar } from './components/Navbar';

import { Hero } from './components/Hero';
import { ObrasSocialesSection } from './components/ObrasSocialesSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutDoctor } from './components/AboutDoctor';
import { InteractiveTurnoEstimator } from './components/InteractiveTurnoEstimator';
import { LocationAndHours } from './components/LocationAndHours';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#28231D] selection:bg-[#E2D5C4] selection:text-[#28231D]">
      <Navbar />
      <main>
        <Hero />
        <ObrasSocialesSection />
        <ServicesSection />
        <AboutDoctor />
        <InteractiveTurnoEstimator />
        <LocationAndHours />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
