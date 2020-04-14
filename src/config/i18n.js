import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en/en";
import fr from "../locales/fr/fr";
import ro from "../locales/ro/ro";
i18n.use(initReactI18next).init({
    resources: {
        en,
        fr,
        ro
    },
    fallbackLng: "en",
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: '.',
    interpolation: {
        escapeValue: false,
        formatSeparator: ","
    },
    react: {
        wait: true
    },
    bindI18n: 'changeLang',
});
export default i18n;