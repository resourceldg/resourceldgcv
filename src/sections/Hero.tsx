import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Starfield } from '@/components/Starfield';
import { ContactModal } from '@/components/ContactModal';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      >
        {/* Starfield background */}
        <Starfield />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />

        {/* Main content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Profile Photo */}
          <div 
            className="mb-8"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'scale(1)' : 'scale(0.8)',
              transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <div className="relative inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-lime/30 shadow-glow mx-auto">
                <img 
                  src="/profile.png" 
                  alt="Lucas Daniel Gomez - ResourceLDG"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Brand badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-lime text-black text-xs font-bold px-3 py-1 rounded-full">
                @ResourceLDG
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
            }}
          >
            Lucas Daniel Gomez
          </h1>

          {/* Role */}
          <p 
            className="text-lg sm:text-xl md:text-2xl text-lime font-medium mb-6 max-w-3xl mx-auto"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0)' : 'translateX(-50px)',
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s'
            }}
          >
            Arquitecto de Automatización, Backend e IA aplicada a procesos contables multiempresa
          </p>

          {/* Description */}
          <p 
            className="text-base sm:text-lg text-gray-3 max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s'
            }}
          >
            Diseño e implemento sistemas, integraciones y flujos automatizados para reducir tareas manuales, 
            mejorar trazabilidad y escalar operaciones repetitivas en entornos con múltiples clientes.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'scale(1)' : 'scale(0)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 1s'
            }}
          >
            <a 
              href="https://wa.me/542236202061?text=Hola%20Lucas%2C%20vi%20tu%20perfil%20y%20quiero%20hablar%20con%20vos" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-lime text-black hover:bg-lime/90 font-semibold px-8 py-6 text-base glow-pulse transition-all duration-300 hover:shadow-glow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Hablar por WhatsApp
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => setIsContactModalOpen(true)}
              className="border-gray-2 text-white hover:bg-gray-1 hover:border-lime/50 font-semibold px-8 py-6 text-base transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Escribirme por email
            </Button>
          </div>

          {/* Social Links */}
          <div 
            className="flex justify-center gap-6"
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.6s ease-out 1.2s'
            }}
          >
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="text-gray-3 hover:text-lime transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </button>
            <a 
              href="https://www.linkedin.com/in/resourceldg/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-3 hover:text-lime transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/resourceldg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-3 hover:text-lime transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </section>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}
