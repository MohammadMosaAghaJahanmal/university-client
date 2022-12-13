import React, { useEffect, useState } from 'react';
import languages from '../utils/localization';
const initialState = {
    loading: true,
};

export const AuthContext = React.createContext({
    ...initialState,
    initialState: initialState,
    setAuth: (prev) => {},
    setLanguage: (langCode) => {}
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
            setLanguage
         }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;