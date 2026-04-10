import { useEffect, useRef, useState } from 'react';
import { 
  Workflow, 
  Plug, 
  Database, 
  BarChart3, 
  Shield, 
  Brain 
} from 'lucide-react';

const aportes = [
  {
    icon: Workflow,
    title: 'Sistemas y herramientas a medida',
    description: 'Diseño e implementación de soluciones digitales adaptadas a necesidades reales de operación, experimentación o producción.'
  },
  {
    icon: Plug,
    title: 'Automatización de procesos',
    description: 'Reducción de tareas manuales, estandarización de flujos y mejora de eficiencia en procesos repetitivos o sensibles al error.'
  },
  {
    icon: Brain,
    title: 'IA aplicada a flujos reales',
    description: 'Diseño de agentes, asistentes y procesos con LLMs integrados a APIs, bases de datos, documentos o herramientas externas.'
  },
  {
    icon: Database,
    title: 'Arquitecturas para entornos complejos',
    description: 'Sistemas mantenibles, escalables y pensados para evolucionar con el tiempo, adaptados a contextos de alta complejidad o experimentación.'
  },
  {
    icon: BarChart3,
    title: 'Integración entre disciplinas y sistemas',
    description: 'Capacidad de traducir necesidades de negocio, investigación, producto o creación en soluciones técnicas accionables y sostenibles.'
  },
  {
    icon: Shield,
    title: 'Prototipado e I+D',
    description: 'Exploración técnica, validación rápida de ideas y construcción de pruebas funcionales para contextos innovadores o de investigación aplicada.'
  }
];

export function LoQuePuedoAportar() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 md:py-32 bg-black">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] sm:w-[500px] sm:h-[300px] md:w-[800px] md:h-[400px] bg-lime/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            Qué puedo <span className="text-lime">aportar</span>
          </h2>
        </div>

        {/* Cards grid - staggered layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {aportes.map((aporte, index) => {
            const Icon = aporte.icon;
            const isOdd = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`group relative ${isOdd ? 'md:-translate-y-8' : ''}`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible 
                    ? `translateY(${isOdd ? '-32px' : '0'})` 
                    : `translateY(100px)`,
                  transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`
                }}
              >
                <div className="relative h-full p-6 md:p-8 rounded-2xl bg-gray-1 border border-gray-2/50 overflow-hidden transition-all duration-500 hover:border-lime/30 hover:shadow-glow group-hover:-translate-y-2">
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-lime/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gray-2 flex items-center justify-center transition-all duration-500 group-hover:bg-lime/10 group-hover:scale-110">
                      <Icon className="w-7 h-7 text-lime transition-transform duration-500 group-hover:rotate-12" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-lime transition-colors duration-300">
                      {aporte.title}
                    </h3>
                    <p className="text-gray-3 text-sm md:text-base leading-relaxed">
                      {aporte.description}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-lime/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Connecting lines SVG - visible on desktop */}
        <svg 
          className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20"
          style={{ maxWidth: '1200px' }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d0ff59" stopOpacity="0" />
              <stop offset="50%" stopColor="#d0ff59" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#d0ff59" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
