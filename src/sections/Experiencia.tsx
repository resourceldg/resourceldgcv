import { useEffect, useRef, useState } from 'react';

const experiencias = [
  {
    empresa: 'Bitnativo',
    periodo: '2017 – Presente',
    titulo: 'Diseño e implementación integral de plataforma web',
    logros: [
      'Diseño de arquitectura backend, modelo de datos, seguridad, despliegue e infraestructura.',
      'Implementación integral de una solución mantenida en producción, con foco en confiabilidad y continuidad operativa.',
      'Resolución de desafíos de rendimiento, disponibilidad y mantenimiento de plataforma.',
      'Integración de componentes externos y adaptación técnica a necesidades reales del negocio.',
      'Experiencia construyendo soluciones sostenibles, escalables y mantenibles en el tiempo.'
    ]
  },
  {
    empresa: 'Consultoría digital',
    periodo: '2017 – 2021',
    titulo: 'Optimización de procesos para PyMEs',
    logros: [
      'Relevamiento de procesos y detección de oportunidades de mejora operativa.',
      'Traducción de necesidades de negocio a soluciones tecnológicas concretas.',
      'Implementación de herramientas y automatizaciones orientadas a eficiencia, orden y resultados medibles.'
    ]
  },
  {
    empresa: 'Automatización e IA aplicada',
    periodo: '2024 – Presente',
    titulo: 'Diseño de agentes y flujos automatizados',
    logros: [
      'Diseño de agentes y flujos automatizados para tareas repetitivas y procesos basados en reglas.',
      'Orquestación de herramientas, APIs, bases de datos y lógica de negocio dentro de procesos automáticos.',
      'Modelado de soluciones para clasificación, consolidación y consulta de información.',
      'Aplicación de IA como capa de asistencia operativa, enfocada en utilidad real y mejora de productividad.'
    ]
  }
];

export function Experiencia() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate line progress
          setTimeout(() => setLineProgress(100), 300);
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
    <section ref={sectionRef} className="relative py-16 sm:py-24 md:py-32 bg-black overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Experiencia relevante para{' '}
            <span className="text-lime">entornos operativos</span>
            <br />
            <span className="text-lime">y multi-cliente</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-2 md:-translate-x-1/2">
            <div 
              className="absolute top-0 left-0 w-full bg-lime transition-all duration-[2000ms] ease-out"
              style={{ height: `${lineProgress}%` }}
            />
          </div>

          {/* Experience items */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
            {experiencias.map((exp, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible 
                      ? 'translateX(0)' 
                      : `translateX(${isLeft ? '-50px' : '50px'})`,
                    transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.2 + 0.3}s`
                  }}
                >
                  {/* Timeline node */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 z-10">
                    <div 
                      className={`w-full h-full rounded-full bg-lime transition-all duration-500 ${
                        isVisible ? 'scale-100 shadow-glow' : 'scale-0'
                      }`}
                      style={{ transitionDelay: `${index * 0.2 + 0.5}s` }}
                    />
                  </div>

                  {/* Content card */}
                  <div className={`ml-10 sm:ml-12 md:ml-0 md:w-[45%] ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="group p-4 sm:p-6 md:p-8 rounded-2xl bg-gray-1 border border-gray-2/50 hover:border-lime/30 transition-all duration-500 hover:shadow-glow">
                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-lime font-semibold text-lg">{exp.empresa}</span>
                        <span className="text-gray-3 text-sm px-3 py-1 rounded-full bg-gray-2">
                          {exp.periodo}
                        </span>
                      </div>

                      <h3 className="text-white font-medium text-sm sm:text-base md:text-lg mb-4">
                        {exp.titulo}
                      </h3>

                      {/* Logros */}
                      <ul className="space-y-3">
                        {exp.logros.map((logro, logroIndex) => (
                          <li 
                            key={logroIndex}
                            className="flex items-start gap-3 text-gray-3 text-sm leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-lime mt-2 flex-shrink-0" />
                            <span>{logro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
