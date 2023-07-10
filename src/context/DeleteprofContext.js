import React , { useState ,  createContext } from "react";

const DeleteprofContext = createContext();

const DeleteprofProvider = ( { children }) => {
    const [ isDelOpen , setIsDelOpen ] = useState ( false );

    return (
        <DeleteprofContext.Provider value={{ isDelOpen, setIsDelOpen }}>
            {children}
        </DeleteprofContext.Provider>
    );
};

export { DeleteprofProvider, DeleteprofContext };