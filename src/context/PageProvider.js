import React , { useState , createContext } from "react";

export const PageContext = createContext ();

const PageProvider = ( { children } ) => {
    const [ pageNumber , setPageNumber ] = useState ( 0 );


    return (
        <PageContext.Provider value={ { pageNumber , setPageNumber } }>
            { children }
        </PageContext.Provider>
    );
};

export default PageProvider;