import { useEffect, useState, createContext } from "react";

import { getAllUsers } from "../api/api";

export const UserContext = createContext([]);

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const getUsersUrl = "http://localhost:7000/user";

  useEffect(() => {
    getAllUsers(getUsersUrl, setUsers);
  },[]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
