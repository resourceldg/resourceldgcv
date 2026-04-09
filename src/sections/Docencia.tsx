import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Users, Lightbulb, Presentation } from 'lucide-react';

export function Docencia() {
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              Docencia y <span className="text-lime">liderazgo técnico</span>
            </h2>

            <div 
              className="space-y-4 text-gray-3 text-base md:text-lg leading-relaxed"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
              }}
            >
              <p>
                Docente de nivel superior en áreas vinculadas a{' '}
                <span className="text-white font-medium">programación</span>,{' '}
                <span className="text-white font-medium">inteligencia artificial</span>,{' '}
                <span className="text-white font-medium">seguridad</span>,{' '}
                <span className="text-white font-medium">ciencia de datos</span> e{' '}
                <span className="text-white font-medium">IoT</span>.
              </p>

              <p>
                Esta experiencia fortaleció mi capacidad para{' '}
                <span className="text-lime font-medium">estructurar problemas</span>,{' '}
                <span className="text-lime font-medium">explicar procesos complejos con claridad</span> y{' '}
                <span className="text-lime font-medium">traducir conceptos técnicos</span> en soluciones 
                comprensibles y aplicables.
              </p>
            </div>

            {/* Stats or highlights */}
            <div 
              className="grid grid-cols-2 gap-6 mt-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-lime/10 flex items-center justify-center">
                  <Presentation className="w-5 h-5 text-lime" />
                </div>
                <span className="text-gray-3 text-sm">Nivel superior</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-lime/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-lime" />
                </div>
                <span className="text-gray-3 text-sm">Múltiples áreas</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-lime/10 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-lime" />
                </div>
                <span className="text-gray-3 text-sm">Pensamiento crítico</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-lime/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-lime" />
                </div>
                <span className="text-gray-3 text-sm">Formación continua</span>
              </div>
            </div>
          </div>

          {/* Visual - Generative grid */}
          <div 
            className="relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
            }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Grid pattern */}
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-2">
                {Array.from({ length: 36 }).map((_, i) => {
                  const row = Math.floor(i / 6);
                  const col = i % 6;
                  const isActive = (row + col) % 3 === 0 || (row * col) % 7 === 0;
                  const delay = (row + col) * 0.05;
                  
                  return (
                    <div
                      key={i}
                      className={`
                        rounded-lg transition-all duration-500
                        ${isActive 
                          ? 'bg-lime/20 shadow-glow' 
                          : 'bg-gray-1/50'
                        }
                      `}
                      style={{
                        opacity: isVisible ? (isActive ? 1 : 0.3) : 0,
                        transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                        transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay + 0.5}s`
                      }}
                    />
                  );
                })}
              </div>

              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-lime/10 blur-2xl" />
              </div>

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-20 h-20 rounded-2xl bg-gray-1 border border-lime/30 flex items-center justify-center shadow-glow"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-180deg)',
                    transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s'
                  }}
                >
                  <GraduationCap className="w-10 h-10 text-lime" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
