import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

interface ConstellationLine {
  star1: number;
  star2: number;
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const linesRef = useRef<ConstellationLine[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const starCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 8000));
      starsRef.current = [];
      linesRef.current = [];

      // Create stars
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.3,
          speed: Math.random() * 0.02 + 0.01,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }

      // Create constellation lines between nearby stars
      for (let i = 0; i < starsRef.current.length; i++) {
        for (let j = i + 1; j < starsRef.current.length; j++) {
          const star1 = starsRef.current[i];
          const star2 = starsRef.current[j];
          const distance = Math.sqrt(
            Math.pow(star1.x - star2.x, 2) + Math.pow(star1.y - star2.y, 2)
          );

          if (distance < 120 && Math.random() > 0.7) {
            linesRef.current.push({ star1: i, star2: j });
          }
        }
      }
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw constellation lines
      linesRef.current.forEach((line) => {
        const star1 = starsRef.current[line.star1];
        const star2 = starsRef.current[line.star2];

        const distance = Math.sqrt(
          Math.pow(star1.x - star2.x, 2) + Math.pow(star1.y - star2.y, 2)
        );

        const opacity = (1 - distance / 150) * 0.15;

        ctx.beginPath();
        ctx.moveTo(star1.x, star1.y);
        ctx.lineTo(star2.x, star2.y);
        ctx.strokeStyle = `rgba(208, 255, 89, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      // Draw and update stars
      starsRef.current.forEach((star) => {
        // Twinkle effect
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase);
        const currentOpacity = star.opacity + twinkle * 0.2;

        // Subtle movement based on mouse
        const mouseOffsetX = (mouseRef.current.x - canvas.width / 2) * star.speed * 0.5;
        const mouseOffsetY = (mouseRef.current.y - canvas.height / 2) * star.speed * 0.5;

        // Draw star glow
        const gradient = ctx.createRadialGradient(
          star.x + mouseOffsetX,
          star.y + mouseOffsetY,
          0,
          star.x + mouseOffsetX,
          star.y + mouseOffsetY,
          star.size * 3
        );
        gradient.addColorStop(0, `rgba(208, 255, 89, ${currentOpacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(208, 255, 89, 0)');

        ctx.beginPath();
        ctx.arc(star.x + mouseOffsetX, star.y + mouseOffsetY, star.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw star core
        ctx.beginPath();
        ctx.arc(star.x + mouseOffsetX, star.y + mouseOffsetY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.3, currentOpacity)})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resizeCanvas();
    animationRef.current = requestAnimationFrame(animate);

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
}
