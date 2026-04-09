import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

const enfoques = [
  'Automatización de procesos repetitivos con foco operativo',
  'Diseño de flujos para entornos con múltiples clientes',
  'Integración entre sistemas y fuentes de datos',
  'Estructuración y trazabilidad de procesos mensuales',
  'Soluciones mantenibles, escalables y seguras',
  'IA aplicada a tareas concretas de soporte y validación'
];

export function Enfoque() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lime/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            Enfoque para el <span className="text-lime">rol</span>
          </h2>
        </div>

        {/* Focus list */}
        <div className="space-y-4">
          {enfoques.map((enfoque, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 p-4 md:p-6 rounded-xl bg-gray-1/50 border border-gray-2/30 hover:border-lime/30 hover:bg-gray-1 transition-all duration-500"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`
              }}
            >
              {/* Check icon with animation */}
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-lime/10 flex items-center justify-center group-hover:bg-lime/20 group-hover:scale-110 transition-all duration-300">
                  <Check 
                    className="w-5 h-5 text-lime" 
                    strokeWidth={3}
                    style={{
                      strokeDasharray: 20,
                      strokeDashoffset: isVisible ? 0 : 20,
                      transition: `stroke-dashoffset 0.4s ease-out ${index * 0.1 + 0.5}s`
                    }}
                  />
                </div>
                {/* Pulse ring on hover */}
                <div className="absolute inset-0 rounded-full border border-lime/30 scale-100 opacity-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500" />
              </div>

              {/* Text */}
              <span className="text-white text-base md:text-lg font-medium group-hover:text-lime transition-colors duration-300">
                {enfoque}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom accent line */}
        <div 
          className="mt-12 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s'
          }}
        />
      </div>
    </section>
  );
}
