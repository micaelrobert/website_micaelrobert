"use client";

import { useEffect, useRef } from "react";

// Bolinha animada que segue o ponteiro com limite da tela
function LittleBall() {
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const ball = ballRef.current;
      if (!ball) return;

      const ballSize = 20; 
      const maxX = window.innerWidth - ballSize;
      const maxY = window.innerHeight - ballSize;

      const x = Math.min(Math.max(e.clientX, 0), maxX);
      const y = Math.min(Math.max(e.clientY, 0), maxY);

      ball.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={ballRef}
      className="fixed top-0 left-0 w-5 h-5 bg-pink-500 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
    />
  );
}

export function AnimatedBackground() {
  return (
    <>
      
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
        <div
          className="absolute inset-0 bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"
          style={{ animation: "backgroundMove 60s linear infinite" }}
        />
      </div>

      
      <LittleBall />

      <style jsx>{`
        @keyframes backgroundMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100% 100%;
          }
        }
      `}</style>
    </>
  );
}
