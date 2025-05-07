import React from 'react';
import { FaMagic, FaTable, FaThLarge } from 'react-icons/fa';

export type ViewMode = 'auto' | 'table' | 'cards';

interface ViewToggleProps {
  currentView: ViewMode;
  onChange: (mode: ViewMode) => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ currentView, onChange }) => {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <span className="text-sm text-gray-600 mr-2">Visualização:</span>
      <button
        onClick={() => onChange('auto')}
        className={`p-2 rounded-md ${
          currentView === 'auto'
            ? 'bg-orange-450 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        title="Automática"
      >
        <FaMagic />
      </button>
      <button
        onClick={() => onChange('table')}
        className={`p-2 rounded-md ${
          currentView === 'table'
            ? 'bg-orange-450 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        title="Tabela"
      >
        <FaTable />
      </button>
      <button
        onClick={() => onChange('cards')}
        className={`p-2 rounded-md ${
          currentView === 'cards'
            ? 'bg-orange-450 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        title="Cards"
      >
        <FaThLarge />
      </button>
    </div>
  );
};

export default ViewToggle;
