import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const seminarios = [
  {
    titulo: 'Magento Meetup MdP 2018',
    descripcion: 'Desarrolladores certificados y líderes de e-commerce.',
    fecha: '5 may. 2018',
    lugar: 'Globant Mar del Plata'
  },
  {
    titulo: 'Globant Converge Buenos Aires 2018',
    descripcion: 'Tendencias digitales con líderes de distintas industrias.',
    fecha: '22 mar. 2018',
    lugar: 'CCK Buenos Aires'
  },
  {
    titulo: 'FortaleceRSE: Visión 2050 – acción 2020',
    descripcion: 'El rol empresarial en agendas de desarrollo sostenible.',
    fecha: '15 mar. 2018',
    lugar: 'CPCE Mar del Plata'
  },
  {
    titulo: 'BQS: 2° Hackathon de Sustentabilidad',
    descripcion: 'Maratón de ideas tecnológicas para sustentabilidad.',
    fecha: '23 feb. 2018',
    lugar: 'Balneario Las Brusquitas, Miramar'
  },
  {
    titulo: 'Facebook: Impulsa tu empresa',
    descripcion: 'Emprendimiento y ventas en Facebook e Instagram.',
    fecha: '28 nov. 2017',
    lugar: 'Hotel Sheraton Mar del Plata'
  },
  {
    titulo: 'Seminario de Arquitectura de Software',
    descripcion: '1er encuentro en MdP (FASTA · ATICMA · UNMDP).',
    fecha: '16 nov. 2017',
    lugar: 'Universidad FASTA'
  },
  {
    titulo: 'Google Tour Federal',
    descripcion: 'Habilidades digitales para PyMEs y emprendedores; Google Ads.',
    fecha: '27 sep. 2017',
    lugar: 'Hotel Costa Galana Mar del Plata'
  }
];

export function Seminarios() {
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
    <section ref={sectionRef} className="relative py-16 sm:py-24 md:py-32 bg-black overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-lime/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            Formación complementaria y <span className="text-lime">comunidad</span>
          </h2>
          <p
            className="text-gray-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
            }}
          >
            Participación en eventos de tecnología, innovación y emprendimiento
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-2 md:-translate-x-1/2">
            <div 
              className="absolute top-0 left-0 w-full bg-lime transition-all duration-[2000ms] ease-out"
              style={{ 
                height: isVisible ? '100%' : '0%',
                transitionDelay: '0.3s'
              }}
            />
          </div>

          {/* Seminar items */}
          <div className="space-y-6 sm:space-y-8">
            {seminarios.map((seminario, index) => {
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
                    transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1 + 0.3}s`
                  }}
                >
                  {/* Timeline node */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1/2 z-10 mt-2">
                    <div 
                      className={`w-full h-full rounded-full bg-lime transition-all duration-500 ${
                        isVisible ? 'scale-100 shadow-glow' : 'scale-0'
                      }`}
                      style={{ transitionDelay: `${index * 0.1 + 0.5}s` }}
                    />
                  </div>

                  {/* Content card */}
                  <div className={`ml-10 sm:ml-12 md:ml-0 md:w-[45%] ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="group p-5 md:p-6 rounded-xl bg-gray-1 border border-gray-2/50 hover:border-lime/30 transition-all duration-500 hover:shadow-glow">
                      {/* Date badge */}
                      <div className="flex items-center gap-2 text-lime text-sm font-medium mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{seminario.fecha}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-white font-semibold text-base md:text-lg mb-2 group-hover:text-lime transition-colors duration-300">
                        {seminario.titulo}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-3 text-sm mb-3 leading-relaxed">
                        {seminario.descripcion}
                      </p>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-gray-3 text-xs">
                        <MapPin className="w-3 h-3" />
                        <span>{seminario.lugar}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Link to GitHub Pages */}
        <div 
          className="text-center mt-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1s'
          }}
        >
        </div>
      </div>
    </section>
  );
}
