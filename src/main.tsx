import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/worker');

  return worker.start({
    onUnhandledRequest: 'warn',
  });
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
