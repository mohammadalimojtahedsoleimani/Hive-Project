import React, { useState,createContext } from "react";

const DonationContext = createContext();

const DonationProvider = ( { children }) => {
    const [ isDonationOpen , setIsDonationOpen ] = useState ( false );


    return (
        <DonationContext.Provider value={{isDonationOpen , setIsDonationOpen }}>
            {children}
        </DonationContext.Provider>
    );
};

export { DonationProvider, DonationContext };