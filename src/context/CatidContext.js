import React, { useState,createContext } from "react";

const CatidContext = createContext();

const CatidProvider = ( { children }) => {
    let [catid, setCatid] = useState('');

    return (
        <CatidContext.Provider value={{catid , setCatid }}>
            {children}
        </CatidContext.Provider>
    );
};

export { CatidProvider, CatidContext };