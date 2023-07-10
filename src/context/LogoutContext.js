import React , { useState ,  createContext } from "react";

const LogoutContext = createContext();

const LogoutProvider = ( { children }) => {
    const [ isLogOpen , setIsLogOpen ] = useState ( false );

    return (
        <LogoutContext.Provider value={{ isLogOpen, setIsLogOpen }}>
            {children}
        </LogoutContext.Provider>
    );
};

export { LogoutProvider, LogoutContext };