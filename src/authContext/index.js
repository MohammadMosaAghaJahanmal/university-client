import React, { useEffect, useState } from 'react';
import languages from '../localization';
const initialState = {
    loading: true,
};

export const AuthContext = React.createContext({
    ...initialState,
    initialState: initialState,
    setAuth: (prev) => {},
    setLanguage: (langCode) => {},
    languageCode: "en" || "af"
});



const AuthProvider = (props) =>
{



    const [auth, setAuth] = useState({...initialState});
    const [languageCode, setLanguageCode] = useState("en");


    useEffect(() =>
    {
        const lang = localStorage.getItem("lang");
        if (lang) {
            setLanguage(lang);
        }

        (async() =>
        {
            setAuth((prev) => ({...prev, loading: false}));
        })()

    }, []);

    const setLanguage = (langCode) =>
    {
        if (langCode == languageCode) {
            return
        }
        languages.setLanguage(langCode);
        setLanguageCode(langCode);
        localStorage.setItem("lang", langCode)

    }


    return (
        <AuthContext.Provider value={{
            ...auth,
            initialState,
            setAuth,
            setLanguage,
            languageCode
         }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;