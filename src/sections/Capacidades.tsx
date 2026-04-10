import { useEffect, useRef, useState } from 'react';

const categorias = [
  {
    nombre: 'Capacidades clave',
    skills: ['Arquitectura de software', 'Automatización de procesos', 'Backend y APIs', 'IA aplicada', 'Integración de sistemas', 'Modelado de datos', 'Infraestructura y despliegue', 'Pensamiento interdisciplinario']
  },
  {
    nombre: 'Stack',
    skills: ['Python', 'Django', 'PostgreSQL', 'Docker', 'OpenAI API', 'LangChain', 'Linux', 'Nginx', 'Git', 'Pandas']
  },
  {
    nombre: 'Ámbitos de interés',
    skills: ['Creative technology', 'R&D', 'Herramientas internas', 'Ciencia de datos', 'Sistemas experimentales', 'Educación tecnológica', 'Producto digital', 'Automatización inteligente']
  },
  {
    nombre: 'Idiomas',
    skills: ['Español — Nativo', 'Inglés — Técnico / documentación']
  }
];

export function Capacidades() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime/[0.02] to-transparent pointer-events-none" />

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
            Capacidades <span className="text-lime">principales</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {categorias.map((categoria, catIndex) => (
            <div 
              key={catIndex}
              className="group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${catIndex * 0.15}s`
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-lime" />
                <h3 className="text-lg font-semibold text-white group-hover:text-lime transition-colors duration-300">
                  {categoria.nombre}
                </h3>
              </div>

              {/* Skills cloud */}
              <div className="flex flex-wrap gap-3">
                {categoria.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`
                      px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium
                      border transition-all duration-300 cursor-default
                      ${hoveredSkill === skill 
                        ? 'bg-lime text-black border-lime scale-110 shadow-glow' 
                        : 'bg-gray-1 text-gray-3 border-gray-2 hover:border-lime/50 hover:text-white'
                      }
                    `}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'scale(1)' : 'scale(0)',
                      transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${catIndex * 0.15 + skillIndex * 0.05 + 0.3}s`
                    }}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative connection lines */}
        <svg 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl pointer-events-none opacity-10"
          viewBox="0 0 800 400"
        >
          <defs>
            <linearGradient id="skillLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d0ff59" stopOpacity="0" />
              <stop offset="50%" stopColor="#d0ff59" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#d0ff59" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="100" r="3" fill="#d0ff59" opacity="0.5" />
          <circle cx="600" cy="300" r="3" fill="#d0ff59" opacity="0.5" />
          <circle cx="400" cy="200" r="3" fill="#d0ff59" opacity="0.5" />
          <path 
            d="M200,100 Q400,150 600,300" 
            stroke="url(#skillLineGradient)" 
            strokeWidth="1" 
            fill="none"
            strokeDasharray="5,5"
          />
          <path 
            d="M600,100 Q400,250 200,300" 
            stroke="url(#skillLineGradient)" 
            strokeWidth="1" 
            fill="none"
            strokeDasharray="5,5"
          />
        </svg>
      </div>
    </section>
  );
}
