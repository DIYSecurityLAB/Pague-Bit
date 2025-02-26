import '@/domain/i18n/index.ts';
import { App } from '@/view/App';
import '@/view/styles/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
