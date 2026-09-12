import './index.css';
import { useScrollReveal } from './hooks/useScrollReveal';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Wings from './sections/Wings';
import Impact from './sections/Impact';
import Journey from './sections/Journey';
import Network from './sections/Network';
import Testimonials from './sections/Testimonials';
import Consultation from './sections/Consultation';

export default function App() {
  useScrollReveal();

  return (
    <>
      {/* Custom cursor — desktop only */}
      <div className="hide-mobile">
        <Cursor />
      </div>

      {/* Noise texture */}
      <div className="noise" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <Wings />
        <Impact />
        <Journey />
        <Network />
        <Testimonials />
        <Consultation />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
