import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{
    const [user, setUser] = React.useState(null)   // directly using useState without importing it 
    return (
        <UserContext.Provider value={{user , setUser}}>
        {children}
         </UserContext.Provider>

    )
}   
export default UserContextProvider