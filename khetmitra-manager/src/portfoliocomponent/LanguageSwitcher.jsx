import React from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import '../../i18n';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "gu" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300 shadow-md"
    >
      <Globe className="w-5 h-5 text-white" />
      <span className="font-medium text-sm">
        {i18n.language === "en" ? "Gujarati" : "English"}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
