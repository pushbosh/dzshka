import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

// Импорт JSON-файлов перевода
import en from '../translations/en.json';
import ru from '../translations/ru.json';

const translations = { en, ru };

export const useLanguage = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  // Функция-помощник для получения нужной строки
  const t = (key) => {
    return translations[language][key] || key;
  };

  return { language, toggleLanguage, t };
};
