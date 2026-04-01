'use client';

import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { Kiwi } from '@/components/site/Logo';

type RadalCardProps = {
    title?: string,
    description?: string,
}


export const RadalCard = ({ title, description }:RadalCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values 
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

    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
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
      }}
      className="relative w-fit h-fit rounded-xl border border-white/10 bg-[#0e0e0e] p-7 flex flex-col justify-end overflow-hidden cursor-default"
    >
      {/* Dynamic Glow Layer */}
      <motion.div 
        style={{
          background: useTransform(
            [glowX, glowY],
            ([cx, cy]) => `radial-gradient(circle at ${cx} ${cy}, rgba(59, 130, 246, 0.15), transparent 80%)`
          )
        }}
        className="absolute inset-0 pointer-events-none" 
      />



      {/* Content with Depth */}
      <div style={{ transform: "translateZ(20px)" }} className="relative">
            <span className="text-[10px] font-medium tracking-widest uppercase text-white/30 block mb-2">
                {title}
            </span>
               
            <p style={{ transform: "translateZ(30px)" }} className="text-[12.5px] text-white/40 leading-relaxed max-w-[240px]">
                {description}
            </p>     
      </div>
    </motion.div>
  );
};
