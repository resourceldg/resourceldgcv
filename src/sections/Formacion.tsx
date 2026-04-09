import { useEffect, useRef, useState } from 'react';
import { BookOpen, Code, Brain } from 'lucide-react';

const formaciones = [
  {
    icon: Code,
    titulo: 'Analista en Sistemas Informáticos',
    institucion: 'I.S.E.T. — Mar del Plata',
    descripcion: 'Formación técnica sólida en análisis, diseño y desarrollo de sistemas.'
  },
  {
    icon: BookOpen,
    titulo: 'Formación continua en tecnología',
    institucion: 'Especialización autónoma',
    descripcion: 'Backend, automatización, DevOps, datos e inteligencia artificial.'
  },
  {
    icon: Brain,
    titulo: 'Licenciatura en Psicología',
    institucion: 'UNMdP — 4 años cursados',
    descripcion: 'Formación en comprensión del comportamiento humano, análisis crítico y resolución de problemas complejos.'
  },
  {
    icon: BookOpen,
    titulo: 'Arquitectura y Calidad de Software',
    institucion: 'Facultad de Ingeniería — Universidad Nacional de Colombia',
    descripcion: 'Especialización en arquitectura de software, calidad, buenas prácticas y diseño de sistemas escalables.'
  }
];

export function Formacion() {
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
    <section ref={sectionRef} className="relative py-16 sm:py-24 md:py-32 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <span className="text-lime">Formación</span>
          </h2>
        </div>

        {/* Education cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {formaciones.map((formacion, index) => {
            const Icon = formacion.icon;
            
            return (
              <div
                key={index}
                className="group relative"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`
                }}
              >
                <div className="h-full p-6 rounded-2xl bg-gray-1 border border-gray-2/50 hover:border-lime/30 transition-all duration-500 hover:shadow-glow group-hover:-translate-y-1">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center transition-all duration-500 group-hover:bg-lime/20 group-hover:scale-110">
                      <Icon className="w-6 h-6 text-lime" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-lime transition-colors duration-300">
                    {formacion.titulo}
                  </h3>
                  
                  <p className="text-lime text-sm font-medium mb-3">
                    {formacion.institucion}
                  </p>
                  
                  <p className="text-gray-3 text-sm leading-relaxed">
                    {formacion.descripcion}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
