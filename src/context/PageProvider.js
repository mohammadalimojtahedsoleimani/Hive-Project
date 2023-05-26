import React , { useEffect , useState,createContext } from "react";
import { getCharity } from "../services/api";

export const PageContext = createContext ();

const PageProvider = ( { children } ) => {
    const [ pageNumber , setPageNumber ] = useState ( 1 );


    return (
        <PageContext.Provider value={ pageNumber }>
            { children }
        </PageContext.Provider>
    );
};

export default PageProvider;