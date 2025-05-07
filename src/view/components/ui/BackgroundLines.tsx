import { useEffect, useState } from 'react';
import fundoLinhas from '../../assets/fundo_Linhas.svg';

interface BackgroundLinesProps {
  className?: string;
}

const BackgroundLines = ({ className = '' }: BackgroundLinesProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Marcar como carregado após montagem para ativar as animações
    setLoaded(true);
  }, []);

  return (
    <div className={`absolute inset-0 w-full h-full ${className}`}>
      <div className="w-full h-full relative overflow-hidden">
        {/* SVG base */}
        <img
          src={fundoLinhas}
          alt="Background lines"
          className="w-full h-auto absolute bottom-0 left-0 right-0 md:scale-100 md:origin-bottom scale-[1.8] origin-bottom"
          style={{
            maxHeight: 'none',
            objectFit: 'cover',
            objectPosition: 'bottom',
          }}
        />

        {/* Camada de efeito para animação */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ pointerEvents: 'none' }}
        >
          {/* Pulsos de energia */}
          <div className="pulse-point pulse-1"></div>
          <div className="pulse-point pulse-2"></div>
          <div className="pulse-point pulse-3"></div>
          <div className="pulse-point pulse-4"></div>
          <div className="pulse-point pulse-5"></div>

          {/* Linhas energizadas */}
          <div className="energy-line line-1"></div>
          <div className="energy-line line-2"></div>
          <div className="energy-line line-3"></div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundLines;
