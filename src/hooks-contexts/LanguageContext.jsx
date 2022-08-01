import { createContext, useContext, useLayoutEffect, useState } from "react";
import { useJsonStorage } from "./useLocalStorage";
import AppTranslationsService from "../services/app-translations";
import { useAuth } from "./AuthContext";

const LanguageContext = createContext({});

function LanguageProvider({ children }) {
    const languageService = AppTranslationsService();
    const { user } = useAuth();
    const [language, setLanguage] = useJsonStorage("flowex-cli-language-config");

    useLayoutEffect(() => {
        languageService.get_(1, {
            params: user?.language_code || window.navigator.languages[0]
        })
            .then(res => setLanguage(res.data));
    }, [language])

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