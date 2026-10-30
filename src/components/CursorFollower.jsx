import React, { useEffect, useRef } from 'react';

/**
 * CursorFollower (Easter Egg)
 * Features:
 * - Subtle glowing emerald trailing spark that smoothly tracks cursor position.
 * - Smooth lerp (linear interpolation) physics.
 * - Particle trail effect when moving the mouse across the page.
 * - Non-intrusive (pointer-events: none, hidden on touch/mobile screens).
 */
export default function CursorFollower() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailCanvasRef = useRef(null);

  useEffect(() => {
    // Disable on mobile/touch screens
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animId;

    const canvas = trailCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    class SparkParticle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2.2 + 1;
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;
        this.alpha = 0.85;
        this.color = Math.random() > 0.4 ? '#10b981' : '#a3e635'; // Neon Emerald or Cyber Lime
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= 0.028;
        this.size *= 0.95;
      }

      draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, Math.max(0.2, this.size), 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.globalAlpha = Math.max(0, this.alpha);
        context.shadowColor = this.color;
        context.shadowBlur = 6;
        context.fill();
        context.globalAlpha = 1;
      }
    }

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Spawn spark particles on movement
      if (Math.random() > 0.45 && particles.length < 35) {
        particles.push(new SparkParticle(mouseX, mouseY));
      }
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const render = () => {
      // Lerp ring position smoothly towards mouse
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      // Draw particle trail
      ctx.clearRect(0, 0, width, height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx);
        if (p.alpha <= 0 || p.size <= 0.2) {
          particles.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block" aria-hidden="true">
      {/* Spark Particle Canvas Trail */}
      <canvas ref={trailCanvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Tiny Center Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-lime-400 shadow-[0_0_8px_#a3e635] pointer-events-none will-change-transform"
      />

      {/* Trailing Aura Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-emerald-400/50 bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.35)] backdrop-blur-[0.5px] pointer-events-none will-change-transform transition-opacity duration-300"
      />
    </div>
  );
}
