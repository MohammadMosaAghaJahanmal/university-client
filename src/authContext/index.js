import React, { useEffect, useState } from 'react';
import languages from '../localization';
import useStore from '../store/store';
import serverPath from '../utils/serverPath';
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
    const dispatch = useStore(false)[1];

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
            const {data: heros} = await (await fetch(serverPath("/hero"))).json();
            dispatch("setData", {type: "heros", data: heros});

            const {data: contactInfo} = await (await fetch(serverPath("/contact_info"))).json();
            dispatch("setData", {type: "contactinfos", data: contactInfo});

            const {data: chancellormessages} = await (await fetch(serverPath("/chan_msg"))).json();
            dispatch("setData", {type: "chancellormessages", data: chancellormessages});

            const {data: news} = await (await fetch(serverPath("/news"))).json();
            dispatch("setData", {type: "news", data: news});

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