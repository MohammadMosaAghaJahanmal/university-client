import React, { useEffect, useState } from 'react';
import languages from '../localization';
import useStore from '../store/store';
import serverPath from '../utils/serverPath';
const initialState = {
    login: false,
    token: null,
    student: null,
    loading: true,
    authLoading: false,

};

export const AuthContext = React.createContext({
    ...initialState,
    initialState: {...initialState},
    setAuth: (prev) => {},
    setLanguage: (langCode) => {},
    languageCode: "en" || "af"
});

let SA_TOKEN = "SA_TOKEN";

const AuthProvider = (props) =>
{
    const dispatch = useStore(false)[1];

    const [auth, setAuth] = useState({...initialState});
    const [languageCode, setLanguageCode] = useState("en");


    useEffect(() =>
    {

        const lang = localStorage.getItem("lang");
        if (lang) 
            setLanguage(lang);
        (async() =>
        {
            const {data, status} = await (await fetch(serverPath("/bulky"))).json();
            if(status === "success")
                data.forEach(perModelData => {
                    dispatch('setData', {...perModelData});
                });
            setAuth((prev) => ({...prev, loading: false}));
        })()

    }, []);

    useEffect(() =>
    {
        (async()=>{
            const authtoken = localStorage.getItem(SA_TOKEN);
            if (!authtoken)
                return;
            setAuth(prev => ({...prev, authLoading: true}));
            try {
                const response = await fetch(serverPath("/token"), {
                method: "POST",
                headers: {
                "Authorization": `bearer ${authtoken}`
                },
                });
                const objData = await response.json();
                if (objData.status === 'success') {
                    setAuth((prev) => ({
                        ...prev, 
                        login: true, 
                        token: authtoken,
                        student: objData.user,
                        authLoading: false
                    }));
                    return
                };

            } catch (error) {}
            localStorage.removeItem(SA_TOKEN);
            setAuth(prev => ({...prev, authLoading: false}));
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