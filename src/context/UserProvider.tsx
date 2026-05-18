import { createContext } from "react";

interface userProviderProps {
  name: string;
  age: number;
}

export const UserContext = createContext<userProviderProps | null>(null);

const userData: userProviderProps = {
  name: "Saurabh",
  age: 25,
};

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
