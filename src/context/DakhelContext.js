import React, { useState,createContext } from "react";

const DakhelContext = createContext();

const DakhelProvider = ( { children }) => {
    let [isIn, setIsIn] = useState(null);

    return (
        <DakhelContext.Provider value={{isIn , setIsIn }}>
            {children}
        </DakhelContext.Provider>
    );
};

export { DakhelProvider, DakhelContext };