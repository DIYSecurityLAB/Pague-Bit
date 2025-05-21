import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import BackgroundLines from '../../components/ui/BackgroundLines';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import WalletDashboard from './tablewallets/WalletDashboard';
import { SelectedFilters } from './tablewallets/WalletFilterSidebar';

interface TutorialAnswers {
  sistema: string | null;
  conhecimento: string | null;
  criterio: string | null;
  recurso: string | null;
}

const WalletSelector: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<TutorialAnswers>({
    sistema: null,
    conhecimento: null,
    criterio: null,
    recurso: null,
  });
  const [tutorialCompleted, setTutorialCompleted] = useState<boolean>(false);

  const handleSelect = (key: keyof TutorialAnswers, value: string) => {
    // Se a opção for "skip" (pular tutorial), encerra o tutorial imediatamente.
    if (value === 'skip') {
      setTutorialCompleted(true);
      return;
    }

    // Se a opção for "ignorar" (pular tutorial nas etapas 2-4), encerra o tutorial imediatamente.
    if (value === 'ignorar') {
      setTutorialCompleted(true);
      return;
    }

    setAnswers((prev) => ({ ...prev, [key]: value }));
    if (step < 4) {
      setStep((prev) => prev + 1);
    } else {
      setTutorialCompleted(true);
    }
  };

  // Mapeia as respostas do tutorial para os filtros iniciais (usando as chaves corretas)
  const getInitialFilters = (): SelectedFilters => {
    let osFilters: string[] = [];
    let usageFilters: string[] = [];
    let coinTypeFilters: string[] = [];

    if (answers.sistema) {
      switch (answers.sistema) {
        case 'mobile':
          osFilters.push('A', 'I'); // Ambos Android e iOS
          break;
        case 'desktop':
          osFilters.push('L', 'W', 'M');
          break;
        case 'hardware':
          osFilters.push('H');
          break;
        // Manter compatibilidade com as opções antigas
        case 'celular-android':
          osFilters.push('A');
          break;
        case 'celular-ios':
          osFilters.push('I');
          break;
        default:
          break;
      }
    }

    if (answers.conhecimento) {
      switch (answers.conhecimento) {
        case 'controle':
          coinTypeFilters.push('bitcoin-only');
          break;
        case 'autonomia':
          coinTypeFilters.push('multi-coin');
          break;
        // Manter compatibilidade com as opções antigas
        case 'novo':
          usageFilters.push('novo');
          break;
        case 'experiente':
          usageFilters.push('experiente');
          break;
        default:
          break;
      }
    }

    return { os: osFilters, usage: usageFilters, coinType: coinTypeFilters };
  };

  if (tutorialCompleted) {
    const initialFilters = getInitialFilters();
    return <WalletDashboard initialFilters={initialFilters} />;
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex flex-col justify-center items-center">
      <BackgroundLines />

      {/* Container principal com o tutorial - ajustado para posicionar melhor verticalmente */}
      <div className="max-w-4xl w-full bg-orange-450 p-8 rounded-xl shadow-lg text-white relative z-10 mx-auto mt-16 mb-0">
        <AnimatePresence mode="wait">
          {step === 1 && <Step1 onSelect={handleSelect} />}
          {step === 2 && (
            <Step2
              onSelect={handleSelect}
              onFinish={() => setTutorialCompleted(true)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WalletSelector;
