"use client";

import { useRef, useCallback, type ReactNode } from "react";

interface MouseTiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees */
  maxTilt?: number;
  /** Perspective distance */
  perspective?: number;
  /** Transition speed */
  speed?: number;
  /** Show glare overlay */
  glare?: boolean;
  /** Max glare opacity */
  maxGlare?: number;
}

export function MouseTiltCard({
  children,
  className = "",
  maxTilt = 8,
  perspective = 1000,
  speed = 400,
  glare = true,
  maxGlare = 0.15,
}: MouseTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      card.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

      if (glare && glareRef.current) {
        const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 180;
        const distance = Math.sqrt(
          Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
        );
        const maxDistance = Math.sqrt(
          Math.pow(centerX, 2) + Math.pow(centerY, 2)
        );
        const opacity = (distance / maxDistance) * maxGlare;

        glareRef.current.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,${opacity}) 0%, transparent 80%)`;
        glareRef.current.style.opacity = "1";
      }
    },
    [maxTilt, perspective, glare, maxGlare]
  );

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;

    if (glare && glareRef.current) {
      glareRef.current.style.opacity = "0";
    }
  }, [perspective, glare]);

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transition: `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
        willChange: "transform",
      }}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300"
          style={{ mixBlendMode: "overlay" }}
        />
      )}
    </div>
  );
}
