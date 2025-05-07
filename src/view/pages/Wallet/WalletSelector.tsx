import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import BackgroundLines from '../../components/ui/BackgroundLines';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
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

  const skipTutorial = () => {
    setTutorialCompleted(true);
  };

  const handleSelect = (key: keyof TutorialAnswers, value: string) => {
    // Se a opção for "ignorar" (pular tutorial), encerra o tutorial imediatamente.
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

    if (answers.sistema) {
      switch (answers.sistema) {
        case 'celular-android':
          osFilters.push('A');
          break;
        case 'celular-ios':
          osFilters.push('I');
          break;
        case 'desktop':
          osFilters.push('L', 'W', 'M');
          break;
        case 'hardware':
          osFilters.push('H');
          break;
        default:
          break;
      }
    }
    if (answers.conhecimento) {
      switch (answers.conhecimento) {
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
    return { os: osFilters, usage: usageFilters };
  };

  if (tutorialCompleted) {
    const initialFilters = getInitialFilters();
    return <WalletDashboard initialFilters={initialFilters} />;
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <BackgroundLines />

      {/* Reposicionamento do botão com margem superior */}
      <div className="w-full p-4 flex justify-end items-center relative z-10 max-w-4xl mx-auto mt-10">
        <button
          onClick={skipTutorial}
          className="group flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-orange-500 transition-colors"
        >
          <span className="text-sm font-medium">
            Ir direto para as carteiras
          </span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>

      {/* Container principal com o tutorial */}
      <div className="max-w-4xl w-full bg-orange-450 p-8 rounded-xl shadow-lg text-white relative z-10 mx-auto my-4">
        <AnimatePresence mode="wait">
          {step === 1 && <Step1 onSelect={handleSelect} />}
          {step === 2 && <Step2 onSelect={handleSelect} />}
          {step === 3 && <Step3 onSelect={handleSelect} />}
          {step === 4 && (
            <Step4
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
