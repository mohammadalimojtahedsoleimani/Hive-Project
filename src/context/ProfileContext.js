import React, { useState } from "react";

const ProfileContext = React.createContext();

const ProfileProvider = ( { children }) => {
    const [profile,setProfile]=useState(null)

    return (
        <ProfileContext.Provider value={{profile , setProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};

export { ProfileProvider, ProfileContext };