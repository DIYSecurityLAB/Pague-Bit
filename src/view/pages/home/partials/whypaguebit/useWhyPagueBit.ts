import { useRef, useState, useEffect } from "react";
import { useAnimation } from "framer-motion";

export const useWhyPagueBit = () => {
  const itemsRef = useRef<HTMLDivElement | null>(null); // ⬅ Define o tipo corretamente
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [singleWidth, setSingleWidth] = useState(0);

  useEffect(() => {
    if (itemsRef.current) {
      const width = itemsRef.current.scrollWidth / 2; // ⬅ Agora TypeScript entende que `scrollWidth` existe
      setSingleWidth(width);
      controls.set({ x: -width });
    }
  }, [controls]);

  useEffect(() => {
    if (singleWidth === 0) return;

    const speed = 50;
    const duration = singleWidth / speed;

    if (!isHovered) {
      controls.start({
        x: 0,
        transition: {
          ease: "linear",
          duration: duration,
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    } else {
      controls.stop();
    }
  }, [isHovered, singleWidth, controls]);

  return {
    itemsRef,
    controls,
    isHovered,
    setIsHovered,
  };
};
