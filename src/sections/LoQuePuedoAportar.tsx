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
    title: 'Automatización de tareas mensuales repetitivas',
    description: 'Diseño de flujos para reducir carga operativa en procesos periódicos, validaciones, consolidación de información y generación de entregables por cliente.'
  },
  {
    icon: Plug,
    title: 'Integración con sistemas externos',
    description: 'Conexión de APIs, ERPs, plataformas de gestión, servicios fiscales, herramientas internas y otras fuentes de datos necesarias para centralizar operaciones.'
  },
  {
    icon: Database,
    title: 'Pipelines de datos multiempresa',
    description: 'Estructuras preparadas para trabajar con múltiples clientes de manera aislada, ordenada, auditable y escalable.'
  },
  {
    icon: BarChart3,
    title: 'Reporting y seguimiento operativo',
    description: 'Automatización de reportes, resúmenes por cliente, tableros de control y procesos de trazabilidad para mejorar visibilidad y control.'
  },
  {
    icon: Shield,
    title: 'Seguridad y estabilidad de la operación',
    description: 'Implementación de soluciones confiables, con foco en continuidad operativa, buenas prácticas de infraestructura y protección de la información.'
  },
  {
    icon: Brain,
    title: 'IA aplicada a operaciones internas',
    description: 'Diseño de asistentes y agentes para clasificación, validación, consulta y soporte sobre procesos internos basados en reglas, documentos y datos.'
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
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-black">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-lime/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            Lo que puedo aportar a{' '}
            <span className="text-lime">su empresa</span>
          </h2>
        </div>

        {/* Cards grid - staggered layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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
