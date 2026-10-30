import React, { useEffect, useRef } from 'react';

/**
 * MatrixGridCanvas
 * Renders an interactive matrix-dot grid on HTML5 canvas.
 * Features:
 * - Subtle ambient perspective oscillation / undulating sine wave.
 * - Interactive mouse physics: ripples and deflects dots outward with dynamic brightness.
 * - Neon emerald (#10b981) and cyber lime (#a3e635) accent illumination.
 * - Responsive retina-crisp rendering using window.devicePixelRatio.
 */
export default function MatrixGridCanvas() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({
    x: -9999,
    y: -9999,
    targetX: -9999,
    targetY: -9999,
    isHovered: false,
    radius: 140,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dots = [];
    const spacing = 32; // Grid density

    class Dot {
      constructor(x, y) {
        this.baseX = x;
        this.baseY = y;
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.size = 1.25;
        this.baseAlpha = 0.16;
        this.alpha = 0.16;
        this.highlightColor = '#10b981'; // Neon emerald
      }

      update(mouseX, mouseY, time) {
        // Subtle ambient wave oscillation
        const ambientWave = Math.sin(time * 0.0022 + this.baseX * 0.008 + this.baseY * 0.008) * 2;
        const targetBaseX = this.baseX;
        const targetBaseY = this.baseY + ambientWave;

        // Mouse displacement & ripple calculation
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = mouseRef.current.radius;

        if (dist < maxDist && dist > 0) {
          const force = (1 - dist / maxDist);
          const pushAngle = Math.atan2(dy, dx);
          const pushDist = force * 24;

          // Push dots away from mouse with spring force
          const targetX = targetBaseX - Math.cos(pushAngle) * pushDist;
          const targetY = targetBaseY - Math.sin(pushAngle) * pushDist;

          this.vx += (targetX - this.x) * 0.08;
          this.vy += (targetY - this.y) * 0.08;

          // Brighten on proximity
          this.alpha = Math.min(0.9, this.baseAlpha + force * 0.75);
          this.size = 1.25 + force * 1.8;

          // Alternate highlight between neon emerald and bright lime
          if (force > 0.6) {
            this.highlightColor = '#a3e635'; // Neon lime
          } else {
            this.highlightColor = '#10b981'; // Neon emerald
          }
        } else {
          // Return smoothly to base position
          this.vx += (targetBaseX - this.x) * 0.04;
          this.vy += (targetBaseY - this.y) * 0.04;

          this.alpha += (this.baseAlpha - this.alpha) * 0.05;
          this.size += (1.25 - this.size) * 0.05;
          this.highlightColor = '#10b981';
        }

        // Apply friction
        this.vx *= 0.82;
        this.vy *= 0.82;
        this.x += this.vx;
        this.y += this.vy;
      }

      draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        if (this.alpha > 0.25) {
          context.fillStyle = this.highlightColor;
          context.shadowColor = this.highlightColor;
          context.shadowBlur = 6;
        } else {
          context.fillStyle = `rgba(16, 185, 129, ${this.alpha})`;
          context.shadowBlur = 0;
        }
        context.fill();
      }
    }

    const initGrid = () => {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.parentElement.offsetWidth;
      height = canvas.parentElement.offsetHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      dots = [];
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacing;
          const y = r * spacing;
          dots.push(new Dot(x, y));
        }
      }
    };

    let startTime = performance.now();
    const render = (now) => {
      const elapsed = now - startTime;

      // Mouse position smoothing (lerp)
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.15;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.15;

      ctx.clearRect(0, 0, width, height);

      // Draw dots
      const curMouseX = mouseRef.current.x;
      const curMouseY = mouseRef.current.y;

      for (let i = 0; i < dots.length; i++) {
        dots[i].update(curMouseX, curMouseY, elapsed);
        dots[i].draw(ctx);
      }

      // Draw subtle connecting cyber filaments between active nearby dots near cursor
      ctx.shadowBlur = 0;
      if (curMouseX > 0 && curMouseY > 0) {
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.12)';
        ctx.lineWidth = 0.75;
        const activeRadius = mouseRef.current.radius * 0.85;

        for (let i = 0; i < dots.length; i++) {
          const d1 = dots[i];
          const distMouse = Math.hypot(d1.x - curMouseX, d1.y - curMouseY);
          if (distMouse < activeRadius) {
            // Find nearby dots
            for (let j = i + 1; j < dots.length; j++) {
              const d2 = dots[j];
              const distDots = Math.hypot(d1.x - d2.x, d1.y - d2.y);
              if (distDots < spacing * 1.5) {
                ctx.beginPath();
                ctx.moveTo(d1.x, d1.y);
                ctx.lineTo(d2.x, d2.y);
                ctx.stroke();
              }
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    initGrid();
    animationFrameId = requestAnimationFrame(render);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
      mouseRef.current.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = -9999;
      mouseRef.current.targetY = -9999;
      mouseRef.current.isHovered = false;
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current.targetX = e.touches[0].clientX - rect.left;
        mouseRef.current.targetY = e.touches[0].clientY - rect.top;
        mouseRef.current.isHovered = true;
      }
    };

    const handleResize = () => {
      initGrid();
    };

    const parent = canvas.parentElement;
    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseleave', handleMouseLeave);
    parent.addEventListener('touchmove', handleTouchMove, { passive: true });
    parent.addEventListener('touchend', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
      parent.removeEventListener('touchmove', handleTouchMove);
      parent.removeEventListener('touchend', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}

