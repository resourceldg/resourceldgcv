import { useEffect, useRef, useState } from 'react';

export function PropuestaValor() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="relative rounded-3xl overflow-hidden"
          onMouseMove={handleMouseMove}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'rotateX(0deg)' : 'rotateX(90deg)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
        >
          {/* Glassmorphism card background */}
          <div 
            className="absolute inset-0 bg-gray-1/80 backdrop-blur-xl"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(208, 255, 89, 0.08) 0%, transparent 50%)`
            }}
          />
          
          {/* Border gradient */}
          <div className="absolute inset-0 rounded-3xl border border-gray-2/50" />
          <div 
            className="absolute inset-0 rounded-3xl border border-lime/20 pointer-events-none"
            style={{
              background: `linear-gradient(${mousePosition.x * 360}deg, rgba(208, 255, 89, 0.3) 0%, transparent 50%)`,
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'xor',
              WebkitMaskComposite: 'xor',
              padding: '1px'
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-5 sm:p-8 md:p-12 lg:p-16">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
              }}
            >
              Propuesta de <span className="text-lime">valor</span>
            </h2>

            <div
              className="space-y-4 sm:space-y-6 text-gray-3 text-sm sm:text-base md:text-lg leading-relaxed"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s'
              }}
            >
              <p>
                Tengo base técnica en <span className="text-white font-medium">arquitectura de software</span>,{' '}
                <span className="text-white font-medium">backend</span>,{' '}
                <span className="text-white font-medium">automatización</span> e{' '}
                <span className="text-white font-medium">IA</span>. Pero mi diferencial no es solo
                lo que puedo construir: es la capacidad de entender un problema complejo, diseñar
                una solución coherente y llevarlo a producción con criterio real.
              </p>

              <p>
                Me muevo bien en contextos donde la tecnología y la idea necesitan conversar: donde
                no alcanza con ejecutar, sino que hace falta{' '}
                <span className="text-white font-medium">pensar el sistema</span>,{' '}
                <span className="text-white font-medium">traducir la necesidad</span> y tomar
                decisiones con consecuencias.
              </p>

              <p>
                Trabajo con equipos técnicos, con equipos creativos y con equipos que operan en
                la intersección. Puedo ser el punto de contacto entre{' '}
                <span className="text-lime font-medium">lo que se necesita</span> y{' '}
                <span className="text-lime font-medium">lo que se puede construir</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
