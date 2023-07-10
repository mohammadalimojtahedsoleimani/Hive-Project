import { createContext, useEffect, useState } from "react";

// Create and export the mobile view context
export const MobileViewContext = createContext ();

// Define the provider component
const MobileViewProvider = ( { children } ) => {

    // Define a boolean value for mobile view based on the viewport width
    const minDeskWidth = 768
    const initialMobileState = {
        mobileView: window.innerWidth < minDeskWidth,
      };
      
    const [isMobile, setIsMobile] = useState(initialMobileState.mobileView);

    // Define a function to handle window resize events
    const handleWindowSizeChange = () => {
      setIsMobile(window.innerWidth < minDeskWidth);
    };

    // Add the listener on mount and remove it on unmount
    useEffect(() => {
      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }, []);

    

    // Return the context provider with the mobile view value
    return (
        <MobileViewContext.Provider value={ isMobile }>
            { children }
        </MobileViewContext.Provider>
    );
  };


export default MobileViewProvider;