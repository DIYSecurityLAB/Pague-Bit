import { useState, useEffect, useRef } from "react";
import { useAnimation } from "framer-motion";
import { BitcoinPriceRepository } from "../../../../../data/repositories";
import { BitcoinPrice } from "../../../../../domain/entities/BitcoinPrice.entity";

export const useBitcoinTickerPrices = () => {
  const [prices, setPrices] = useState<BitcoinPrice>({});
  const [loading, setLoading] = useState<boolean>(true);
  const repository = new BitcoinPriceRepository();

  // Ref e animação para loop infinito
  const itemsRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    // Buscar os preços do Bitcoin
    const fetchPrices = async () => {
      setLoading(true);
      try {
        const result = await repository.getCurrentPrice(["usd", "brl", "cny", "eur"]);
        setPrices(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
    const intervalId = setInterval(fetchPrices, 300000); // Atualiza a cada 5 minutos
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Atualiza a largura do container e define a posição inicial como 0
    const updateContainerWidth = () => {
      if (itemsRef.current) {
        // Dividido por 2 porque o conteúdo está duplicado
        const width = itemsRef.current.scrollWidth / 2;
        setContainerWidth(width);
        controls.set({ x: 0 });
      }
    };

    updateContainerWidth();
    window.addEventListener("resize", updateContainerWidth);
    return () => window.removeEventListener("resize", updateContainerWidth);
  }, [prices, controls]);

  useEffect(() => {
    if (containerWidth === 0) return;

    const speed = 50; // Ajuste a velocidade conforme necessário
    const duration = containerWidth / speed;

    if (!isHovered) {
      // Inicia a animação de x: 0 até -containerWidth
      controls.start({
        x: -containerWidth,
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
  }, [isHovered, containerWidth, controls]);

  return {
    prices,
    loading,
    itemsRef,
    controls,
    isHovered,
    setIsHovered,
  };
};
