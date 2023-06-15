import en from './locales/en.json'
import ru from './locales/ru.json'

import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

const resources = {
    en: {
        translation: en,
    },
    ru:{
        translation: ru,
    }
}

i18n
.use(initReactI18next)
// .use(LanguageDetector)
.init({
    resources,
    lang: 'ru',
    fallbackLng: 'ru',
    // disabled in production
	debug: false,
    interpolation: {
        escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    react: {
        wait: true,
    },
})

export default i18n;