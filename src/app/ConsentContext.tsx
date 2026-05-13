"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

export type Consent = {
  analytics: boolean;
};

type ConsentState = {
  consent: Consent | null; // null = noch nicht entschieden
  acceptAll: () => void;
  rejectAll: () => void;
  setConsent: (consent: Consent) => void;
  openSettings: () => void;
  closeSettings: () => void;
  settingsOpen: boolean;
};

const STORAGE_KEY = "cookie-consent-v1";

const ConsentContext = createContext<ConsentState>({
  consent: null,
  acceptAll: () => {},
  rejectAll: () => {},
  setConsent: () => {},
  openSettings: () => {},
  closeSettings: () => {},
  settingsOpen: false,
});

export const ConsentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [consent, setConsentState] = useState<Consent | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Consent;
        setConsentState(parsed);
      }
    } catch {
      // ignore parse errors
    }
    setHydrated(true);
  }, []);

  const persist = useCallback((c: Consent) => {
    setConsentState(c);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
    } catch {
      // ignore (e.g. storage disabled)
    }
  }, []);

  const acceptAll = useCallback(() => {
    persist({ analytics: true });
    setSettingsOpen(false);
  }, [persist]);

  const rejectAll = useCallback(() => {
    persist({ analytics: false });
    setSettingsOpen(false);
  }, [persist]);

  const setConsent = useCallback(
    (c: Consent) => {
      persist(c);
      setSettingsOpen(false);
    },
    [persist]
  );

  const openSettings = useCallback(() => {
    setSettingsOpen(true);
  }, []);

  const closeSettings = useCallback(() => {
    setSettingsOpen(false);
  }, []);

  return (
    <ConsentContext.Provider
      value={{
        // Vor Hydration immer null zurückgeben, damit der Banner serverseitig
        // nicht falsch initialisiert wird.
        consent: hydrated ? consent : null,
        acceptAll,
        rejectAll,
        setConsent,
        openSettings,
        closeSettings,
        settingsOpen,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
};

export const useConsent = () => useContext(ConsentContext);
