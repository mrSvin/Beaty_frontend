import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const YANDEX_METRIKA_ID = 113128921;

declare global {
  interface Window {
    ym?: (counterId: number, method: string, ...params: unknown[]) => void;
  }
}

export default function YandexMetrika() {
  const location = useLocation();
  const previousUrlRef = useRef<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const currentUrl = window.location.href;
    const previousUrl = previousUrlRef.current;

    // The initial page view is sent by ym(..., 'init', ...). Only SPA
    // navigations need an explicit hit so the first visit is not counted twice.
    if (previousUrl && previousUrl !== currentUrl) {
      window.ym?.(YANDEX_METRIKA_ID, 'hit', currentUrl, {
        title: document.title,
        referer: previousUrl,
      });
    }

    previousUrlRef.current = currentUrl;
  }, [location.pathname, location.search, location.hash]);

  return null;
}
