"use client";

import { LittleBall } from "@/components/animation";

export function AnimatedBackground() {
  return (
    <>
      {/* Fundo gradiente com mesh animada */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
        <div
          className="absolute inset-0 bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"
          style={{ animation: "backgroundMove 60s linear infinite" }}
        />
      </div>

      {/* Bolinha animada que segue o ponteiro */}
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
