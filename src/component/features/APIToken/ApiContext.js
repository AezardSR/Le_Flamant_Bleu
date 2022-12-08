import { createContext, useState } from "react";

const ApiContext = createContext();

const ApiContextProvider = ({children}) => {
    const [token, setToken] = useState(undefined);
    return (
        <ApiContext.Provider value = {{token, setToken}}>
            {children}
        </ApiContext.Provider>
    );
};

export {ApiContext, ApiContextProvider};