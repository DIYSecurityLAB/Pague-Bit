import { Popover } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';
import { AcceptedLanguages } from '../../../../domain/locales/Language';
import { useLanguageSwitcher } from './useLanguageSwitcher';

const FLAGS = {
  [AcceptedLanguages.pt]: 'https://flagcdn.com/br.svg',
  [AcceptedLanguages.en]: 'https://flagcdn.com/us.svg',
  [AcceptedLanguages.es]: 'https://flagcdn.com/es.svg',
};

const LABELS = {
  [AcceptedLanguages.pt]: 'BR',
  [AcceptedLanguages.en]: 'EN',
  [AcceptedLanguages.es]: 'ES',
};

export interface LanguageSwitcherProps {
  className?: string;
  LabelClassName?: string;
}

export function LanguageSwitcher({
  className,
  LabelClassName,
}: LanguageSwitcherProps) {
  const { language } = useLanguageSwitcher();

  return (
    <div className={classNames('flex gap-2', className)}>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-800 focus:ring-0 focus:outline-none">
              <img
                src={FLAGS[language.current as AcceptedLanguages]}
                alt={language.current}
                className="h-5 w-5"
              />
              <span className={LabelClassName}>
                {LABELS[language.current as AcceptedLanguages]}
              </span>
              <ChevronDownIcon
                className={classNames(
                  'h-5 w-5 text-gray-400 transition-transform',
                  open ? 'rotate-180' : '',
                )}
                aria-hidden="true"
              />
            </Popover.Button>

            <Popover.Panel className="absolute right-0 z-50 mt-2 w-36 rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="py-2">
                <button
                  onClick={() => language.change(AcceptedLanguages.pt)}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  <img
                    src={FLAGS[AcceptedLanguages.pt]}
                    alt="Português"
                    className="mr-2 h-5 w-5"
                  />
                  Português
                </button>
                <button
                  onClick={() => language.change(AcceptedLanguages.en)}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  <img
                    src={FLAGS[AcceptedLanguages.en]}
                    alt="English"
                    className="mr-2 h-5 w-5"
                  />
                  English
                </button>
                <button
                  onClick={() => language.change(AcceptedLanguages.es)}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  <img
                    src={FLAGS[AcceptedLanguages.es]}
                    alt="Español"
                    className="mr-2 h-5 w-5"
                  />
                  Español
                </button>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </div>
  );
}
