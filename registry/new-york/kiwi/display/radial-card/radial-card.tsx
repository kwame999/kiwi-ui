'use client';

import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

type RadalCardProps = {
    title?: string,
    description?: string,
}

export const RadalCard = ({ title, description }: RadalCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        background: "var(--kiwi-card-surface)",
        border: "1px solid var(--kiwi-card-border)",
      }}
      className="relative w-fit h-fit rounded-xl p-7 flex flex-col justify-end overflow-hidden cursor-default"
    >
      {/* Dynamic Glow Layer */}
      <motion.div
        style={{
          background: useTransform(
            [glowX, glowY],
            ([cx, cy]) => `radial-gradient(circle at ${cx} ${cy}, var(--kiwi-card-glow-color), transparent 80%)`
          )
        }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Content with Depth */}
      <div style={{ transform: "translateZ(20px)" }} className="relative">
        <span className="text-[10px] font-medium tracking-widest uppercase block mb-2"
          style={{ color: "var(--kiwi-card-title-color)" }}>
          {title}
        </span>
        <p style={{ transform: "translateZ(30px)", color: "var(--kiwi-card-text-color)" }}
          className="text-[12.5px] leading-relaxed max-w-[240px]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
