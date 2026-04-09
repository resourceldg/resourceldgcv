import { useEffect, useRef, useState } from 'react';
import { Globe } from 'lucide-react';

const idiomas = [
  {
    nombre: 'Español',
    nivel: 'Nativo',
    porcentaje: 100
  },
  {
    nombre: 'Inglés',
    nivel: 'Técnico — documentación, APIs y herramientas',
    porcentaje: 75
  },
  {
    nombre: 'Portugués',
    nivel: 'Básico — en desarrollo',
    porcentaje: 50
  }
];

export function Idiomas() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <section ref={sectionRef} className="relative py-16 md:py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <Globe className="w-6 h-6 text-lime" />
          <h2 
            className="text-2xl md:text-3xl font-bold text-white"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            Idiomas
          </h2>
        </div>

        {/* Language bars */}
        <div className="space-y-6 md:space-y-8">
          {idiomas.map((idioma, index) => (
            <div
              key={index}
              className="group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.2 + 0.2}s`
              }}
            >
              <div className="flex justify-between items-end mb-3">
                <div>
                  <span className="text-white font-semibold text-base sm:text-lg group-hover:text-lime transition-colors duration-300">
                    {idioma.nombre}
                  </span>
                  <span className="text-gray-3 text-sm ml-3">
                    {idioma.nivel}
                  </span>
                </div>
                <span className="text-lime font-medium">
                  {idioma.porcentaje}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-3 bg-gray-1 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-lime/80 to-lime transition-all duration-[1500ms] ease-out"
                  style={{
                    width: isVisible ? `${idioma.porcentaje}%` : '0%',
                    transitionDelay: `${index * 0.2 + 0.4}s`
                  }}
                >
                  {/* Shimmer effect */}
                  <div className="w-full h-full relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                      style={{
                        animation: isVisible ? 'shimmer 2s ease-out infinite' : 'none',
                        animationDelay: `${index * 0.2 + 1}s`
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shimmer keyframes */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
}
