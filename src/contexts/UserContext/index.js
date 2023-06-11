import { useContext, createContext, useState } from "react";
import { USERS } from "../../constants/users";

const context = {
  data: {},
  handleLogin: () => {},
};

export const UserContext = createContext(context);

export const UserProvider = ({ children }) => {
  const [data, setData] = useState({
    id: 3, 
    email: 'Admin',
    password: 'Admin',
    name: 'Dono da Porra Toda',
  });

  const handleLogin = (username, password) => {
    const foundUser = USERS.filter(
      (user) =>
        user.email === username && user.password === password
    );
    if (foundUser.length > 0) {
      setData(foundUser[0])
      return true;
    }
    return false;
  };
  
  return (
    <UserContext.Provider
      value={{
        data,
        handleLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
