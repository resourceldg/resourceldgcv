import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactModal } from '@/components/ContactModal';

export function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section ref={sectionRef} className="relative py-16 sm:py-24 md:py-32 bg-black overflow-hidden">
        {/* Animated radial gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(208, 255, 89, 0.08) 0%, transparent 60%)',
            animation: 'pulse 4s ease-in-out infinite'
          }}
        />

        {/* Floating shapes */}
        <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 opacity-20">
          <div className="w-full h-full rounded-full border border-lime/30 animate-float" />
        </div>
        <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-20 h-20 sm:w-32 sm:h-32 opacity-20">
          <div className="w-full h-full rounded-full border border-lime/20 animate-float-delayed" />
        </div>
        <div className="absolute top-1/2 right-8 sm:right-20 w-10 h-10 sm:w-16 sm:h-16 opacity-10">
          <div className="w-full h-full rounded-full bg-lime animate-float-slow" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main text */}
          <p 
            className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white leading-relaxed mb-8 sm:mb-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            Trabajo donde se cruzan{' '}
            <span className="text-lime font-medium">software</span>,{' '}
            <span className="text-lime font-medium">automatización</span>,{' '}
            <span className="text-lime font-medium">IA</span>,{' '}
            pensamiento sistémico y exploración real.{' '}
            Si tu proyecto necesita alguien que pueda ir de la idea a la implementación,
            hablemos.
          </p>

          {/* Contact info */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
            }}
          >
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="flex items-center gap-2 text-gray-3 hover:text-lime transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>resourceldg@gmail.com</span>
            </button>
            <span className="hidden sm:block text-gray-2">|</span>
            <span className="text-gray-3">Contacto directo disponible</span>
          </div>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.9)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s'
            }}
          >
            <a 
              href="https://wa.me/542236202061?text=Hola%20Lucas%2C%20vi%20tu%20perfil%20y%20quiero%20hablar%20con%20vos" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-lime text-black hover:bg-lime/90 font-semibold px-6 py-5 sm:px-10 sm:py-7 text-base sm:text-lg animate-glow-pulse transition-all duration-300 hover:shadow-glow-lg hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Hablar por WhatsApp
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => setIsContactModalOpen(true)}
              className="border-gray-2 text-white hover:bg-gray-1 hover:border-lime/50 font-semibold px-6 py-5 sm:px-10 sm:py-7 text-base sm:text-lg transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Escribirme por email
            </Button>
          </div>
        </div>

        {/* Pulse animation keyframes */}
        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.05); }
          }
        `}</style>
      </section>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}
