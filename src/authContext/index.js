import React, { useEffect, useState } from 'react';

const initialState = {
    loading: true,
};

export const AuthContext = React.createContext({
    ...initialState,
    initialState: initialState,
    setAuth: (prev) => {},
});



const AuthProvider = (props) =>
{



    const [auth, setAuth] = useState({...initialState});


    useEffect(() =>
    {
        (async() =>
        {
            setAuth((prev) => ({...prev, loading: false}));
        })()

    }, [])


    return (
        <AuthContext.Provider value={{
            ...auth,
            initialState,
            setAuth
         }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;