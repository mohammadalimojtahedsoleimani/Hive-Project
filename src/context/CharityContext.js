import React , { useState , createContext } from "react";

const CharityContext = createContext ();

const CharityProvider = ( { children } ) => {
   const [ charity , setCharity ] = useState ( [] );

    return (
        <CharityContext.Provider value={ { charity , setCharity } }>
            { children }
        </CharityContext.Provider>
    );
};

export { CharityProvider,CharityContext};