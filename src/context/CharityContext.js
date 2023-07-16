import React , { useEffect , useState , createContext , useContext } from "react";
import { getCharity } from "../services/api";
import { PageContext } from "./PageProvider";

const CharityContext = createContext ();

const CharityProvider = ( { children } ) => {
   const [ charity , setCharity ] = useState ( [] );
    const { pageNumber } = useContext ( PageContext )
    useEffect ( () => {
        // const fetchAPI = async () => {
        //     setCharity ( await getCharity ( 1 ) );
        // }
        // fetchAPI ();


    } , [] )

    return (
        <CharityContext.Provider value={ { charity , setCharity } }>
            { children }
        </CharityContext.Provider>
    );
};

export { CharityProvider,CharityContext};