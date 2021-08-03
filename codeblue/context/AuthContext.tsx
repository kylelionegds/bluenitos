import { createContext, ReactNode } from "react";
import { useState } from "react";
import { setCookie } from "nookies";
import { TOKEN_KEY } from "../utils/authenticated";

type AuthContextProps = {
  token: string;
  handleSetToken(newToken: string): void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string>("");

  function handleSetToken(newToken: string) {
    setToken(newToken);
    setCookie(undefined, TOKEN_KEY, newToken);
  }

  return (
    <AuthContext.Provider value={{ token, handleSetToken }}>
      {children}
    </AuthContext.Provider>
  );
};
