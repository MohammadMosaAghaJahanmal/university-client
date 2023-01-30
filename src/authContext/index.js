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
        console.log("RENDERING");

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

            const {data: c_vission} = await (await fetch(serverPath("/c_vission"))).json();
            dispatch("setData", {type: "cevissions", data: c_vission});

            const {data: c_mission} = await (await fetch(serverPath("/c_mission"))).json();
            dispatch("setData", {type: "cemissions", data: c_mission});

            const {data: avissionmissionimages} = await (await fetch(serverPath("/vis_mis_img"))).json();
            dispatch("setData", {type: "avissionmissionimages", data: avissionmissionimages});

            const {data: histories} = await (await fetch(serverPath("/history"))).json();
            dispatch("setData", {type: "histories", data: histories});

            const {data: achievements} = await (await fetch(serverPath("/achieve"))).json();
            dispatch("setData", {type: "achievements", data: achievements});

            const {data: orgstructures} = await (await fetch(serverPath("/org_structure"))).json();
            dispatch("setData", {type: "orgstructures", data: orgstructures});

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