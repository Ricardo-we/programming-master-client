import { createContext, useContext, useEffect } from "react";
import { useJsonStorage } from "./useLocalStorage";
import AppTranslationsService from "../services/app-translations";
import { useAuth } from "./AuthContext";

const LanguageContext = createContext({});

function LanguageProvider({ children }) {
    const languageService = AppTranslationsService();
    const { user } = useAuth();
    const [language, setLanguage] = useJsonStorage("flowex-cli-language-config");

    const getLanguageData = () => {
        const userLanguage = user?.language_code?.code?.toLowerCase() || window.navigator.languages[1];
        languageService.get_(1, {
            params: { language_code: userLanguage }
        })
            .then(res => setLanguage(res.data))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        if (!language && !localStorage.getItem("flowex-cli-language-config")) {
            getLanguageData();
        }
    }, [user?.language_code])

    return <LanguageContext.Provider value={{ language, setLanguage }}>
        {children}
    </LanguageContext.Provider>;
}

const useLanguage = () => useContext(LanguageContext);

export {
    LanguageProvider,
    LanguageContext,
    useLanguage
};