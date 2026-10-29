import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "fa" | "en";

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  dir: "rtl" | "ltr";
  t: (keyFa: string, keyEn: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fa");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fa" ? "en" : "fa"));
  };

  const dir = language === "fa" ? "rtl" : "ltr";

  // Force body direction and appropriate fonts
  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language, dir]);

  const t = (keyFa: string, keyEn: string) => {
    return language === "fa" ? keyFa : keyEn;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, dir, t }}>
      <div className={language === "fa" ? "font-sans select-none" : "font-sans select-none"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
