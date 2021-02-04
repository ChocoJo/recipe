import { useState, createContext } from 'react';


export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [authUser, setAuthUser] = useState();

    return (
        <UserContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </UserContext.Provider>
    )
}
