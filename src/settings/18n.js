import i18n from "i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import { DEFAULT_APPLICATION_LANGUAGE } from "@/constants";
i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    lng: DEFAULT_APPLICATION_LANGUAGE,
    fallbackLng: DEFAULT_APPLICATION_LANGUAGE,
    debug: true,
    interpolation: {
        escapeValue: false
    },
    backend: {
        loadPath: "../../public/locales/{{lng}}/translation.json",
        crossDomain: true
    },
})

export default i18n;
