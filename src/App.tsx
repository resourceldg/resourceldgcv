import { Hero } from './sections/Hero';
import { PropuestaValor } from './sections/PropuestaValor';
import { LoQuePuedoAportar } from './sections/LoQuePuedoAportar';
import { Experiencia } from './sections/Experiencia';
import { Capacidades } from './sections/Capacidades';
import { Enfoque } from './sections/Enfoque';
import { Docencia } from './sections/Docencia';
import { Formacion } from './sections/Formacion';
import { Seminarios } from './sections/Seminarios';
import { Idiomas } from './sections/Idiomas';
import { CTA } from './sections/CTA';
import { Footer } from './sections/Footer';
import './App.css';

function App() {
  return (
    <main className="relative bg-black min-h-screen">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Propuesta de Valor */}
      <PropuestaValor />
      
      {/* Lo que puedo aportar */}
      <LoQuePuedoAportar />
      
      {/* Experiencia */}
      <Experiencia />
      
      {/* Capacidades */}
      <Capacidades />
      
      {/* Enfoque */}
      <Enfoque />
      
      {/* Docencia */}
      <Docencia />
      
      {/* Formación */}
      <Formacion />
      
      {/* Seminarios */}
      <Seminarios />
      
      {/* Idiomas */}
      <Idiomas />
      
      {/* CTA Final */}
      <CTA />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}

export default App;
