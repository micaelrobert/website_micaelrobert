import { useState, type RefObject, useEffect } from "react";
import { useMotionValue, useSpring, frame } from "framer-motion";

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  useEffect(() => {
    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current;
      if (!element) return;  

      frame.read(() => {
        xPoint.set(clientX - element.offsetLeft - element.offsetWidth / 4);
        yPoint.set(clientY - element.offsetTop - element.offsetHeight / 4);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [ref]); 

  return { x, y };
}
