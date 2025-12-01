import { createContext } from "react";

export const AuthContext = createContext("light")

export const AuthProvider = ({children}) => {
    return (
      <AuthContext.Provider value={"Hanna"}>{children}</AuthContext.Provider>
    );
}