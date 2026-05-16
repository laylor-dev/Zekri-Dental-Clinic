import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {useEffect, useState} from 'react';
import App from './App.tsx';
import {LogoLoader} from './components/ui/LogoLoader';
import './index.css';

function AppBoot() {
  const [ready, setReady] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const minDelayMs = 1200;
    const start = Date.now();

    const finishBoot = () => {
      const elapsed = Date.now() - start;
      const wait = Math.max(0, minDelayMs - elapsed);
      window.setTimeout(() => {
        setExiting(true);
        window.setTimeout(() => setReady(true), 520);
      }, wait);
    };

    if (document.readyState === 'complete') {
      finishBoot();
      return;
    }

    window.addEventListener('load', finishBoot, {once: true});
    return () => window.removeEventListener('load', finishBoot);
  }, []);

  if (!ready) return <LogoLoader exiting={exiting} />;
  return <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppBoot />
  </StrictMode>,
);
