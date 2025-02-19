// wallet/WalletSelector.tsx
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
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

  const handleSelect = (key: keyof TutorialAnswers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    if (step < 4) {
      setStep((prev) => prev + 1);
    } else {
      // Quando finalizar o tutorial (última etapa) marca como concluído
      setTutorialCompleted(true);
    }
  };

  // Mapeia as respostas do tutorial para os filtros iniciais da dashboard.
  const getInitialFilters = (): SelectedFilters => {
    let osFilters: string[] = [];
    let usageFilters: string[] = [];
    
    if (answers.sistema) {
      switch(answers.sistema) {
        case 'celular-android':
          osFilters.push('android');
          break;
        case 'celular-ios':
          osFilters.push('ios');
          break;
        case 'desktop':
          osFilters.push('linux', 'mac', 'windows');
          break;
        case 'hardware':
          osFilters.push('hardware');
          break;
        default:
          break;
      }
    }
    if (answers.conhecimento) {
      switch(answers.conhecimento) {
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-4xl w-full bg-white p-8 rounded-xl shadow-lg">
        <AnimatePresence mode="wait">
          {step === 1 && <Step1 onSelect={handleSelect} />}
          {step === 2 && <Step2 onSelect={handleSelect} />}
          {step === 3 && <Step3 onSelect={handleSelect} />}
          {step === 4 && (
            <Step4 onSelect={handleSelect} onFinish={() => setTutorialCompleted(true)} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WalletSelector;
